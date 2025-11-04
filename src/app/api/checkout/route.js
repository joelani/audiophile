// src/app/api/checkout/route.js
import { NextResponse } from "next/server";

/**
 * NOTE:
 * - Convex usage below is sketch — adapt to the Convex JS SDK you installed and project setup.
 * - Replace the Resend HTTP call with @resend/node client if you prefer.
 */

export async function POST(req) {
  try {
    const body = await req.json();

    // server-side validation (strict)
    if (
      !body.customer?.name ||
      !body.customer?.email ||
      !Array.isArray(body.items) ||
      body.items.length === 0
    ) {
      return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }

    // calculate totals (example: subtotal + shipping + taxes)
    const subtotal = body.items.reduce(
      (s, it) => s + (Number(it.price) || 0) * (Number(it.quantity) || 1),
      0
    );
    const shipping = 50; // example flat shipping or compute depending on shippingMethod
    const taxes = Math.round(subtotal * 0.07); // 7% example
    const grandTotal = subtotal + shipping + taxes;

    // Save to Convex
    // Option A: call a Convex server mutation you've written (recommended).
    // Option B: call Convex HTTP API / server SDK. Example below assumes you have a server-side helper `convexClient`.
    //
    // Example skeleton:
    // const convex = makeConvexClient({ url: process.env.CONVEX_URL, key: process.env.CONVEX_KEY });
    // const saved = await convex.mutation('createOrder', { customer: body.customer, shipping: body.shipping, items: body.items, totals: { subtotal, shipping, taxes, grandTotal } });

    // For the example, we emulate saved order and generate an orderId:
    const orderRecord = {
      customer: body.customer,
      shipping: body.shipping,
      items: body.items,
      totals: { subtotal, shipping, taxes, grandTotal },
      status: "processing",
      createdAt: new Date().toISOString(),
    };

    // TODO: replace with actual Convex insert call and use returned id
    // e.g. const { id } = await convex.insert('orders', orderRecord)
    const fakeOrderId = `ORD-${Date.now()}`;

    // Send confirmation email via Resend (HTTP POST)
    // Replace with @resend/node or your preferred library.
    const emailHtml = generateOrderEmailHtml(orderRecord, fakeOrderId);

    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "orders@yourdomain.com",
        to: [body.customer.email],
        subject: `Order confirmation — ${fakeOrderId}`,
        html: emailHtml,
      }),
    });

    return NextResponse.json(
      { ok: true, orderId: fakeOrderId, order: orderRecord },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Server error", detail: err.message },
      { status: 500 }
    );
  }
}

function generateOrderEmailHtml(order, orderId) {
  // short responsive HTML template below (see section later)
  return `
    <!doctype html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <style>
        body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; margin:0; padding:0; color:#111 }
        .container { max-width:600px; margin:0 auto; padding:20px; }
        .header { background:#111; color:#fff; padding:20px; text-align:left }
        .card { padding:20px; background:#fff; border-radius:8px; margin-top:16px }
        .items { margin-top:8px }
        .item { display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #eee }
        .cta { display:block; margin-top:20px; text-decoration:none; background:#ff7a45; color:#fff; padding:12px; text-align:center; border-radius:6px }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Audiophile — Order Confirmation</h2>
        </div>
        <div class="card">
          <p>Hi ${escapeHtml(order.customer.name)},</p>
          <p>Thanks — we've received your order <strong>${orderId}</strong>. Summary below:</p>

          <div class="items">
            ${order.items
              .map(
                (it) =>
                  `<div class="item"><span>${escapeHtml(it.name)} x${
                    it.quantity
                  }</span><strong>$${(it.price * it.quantity).toFixed(
                    2
                  )}</strong></div>`
              )
              .join("")}
          </div>

          <div style="margin-top:12px">
            <div style="display:flex; justify-content:space-between"><span>Subtotal</span><strong>$${order.totals.subtotal.toFixed(
              2
            )}</strong></div>
            <div style="display:flex; justify-content:space-between"><span>Shipping</span><strong>$${order.totals.shipping.toFixed(
              2
            )}</strong></div>
            <div style="display:flex; justify-content:space-between"><span>Taxes</span><strong>$${order.totals.taxes.toFixed(
              2
            )}</strong></div>
            <hr />
            <div style="display:flex; justify-content:space-between"><strong>Grand total</strong><strong>$${order.totals.grandTotal.toFixed(
              2
            )}</strong></div>
          </div>

          <a class="cta" href="${
            process.env.PUBLIC_URL || "#"
          }\/order-confirmation/${orderId}">View your order</a>

          <p style="font-size:13px;color:#666;margin-top:10px">Questions? Contact us at support@yourdomain.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function escapeHtml(str = "") {
  return String(str).replace(
    /[&<>"']/g,
    (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        m
      ])
  );
}
