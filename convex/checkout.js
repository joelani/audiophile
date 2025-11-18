import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

export const createOrder = mutation({
  args: {
    formData: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      address: v.string(),
      city: v.string(),
      country: v.string(),
      zip: v.string(),
      paymentMethod: v.string(),
    }),
    cartItems: v.array(
      v.object({
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),
    total: v.number(),
  },

  handler: async (ctx, { formData, cartItems, total }) => {
    console.log("🔍 Running inside Convex server!");

    // ✅ Make sure the API key exists
    const apiKey = ctx.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error("❌ Missing RESEND_API_KEY in Convex environment.");
    }

    const resend = new Resend(apiKey);

    // ✅ Save order to Convex database
    await ctx.db.insert("orders", {
      formData,
      cartItems,
      total,
      createdAt: Date.now(),
      status: "pending",
    });

    // ✅ Send confirmation email
    await resend.emails.send({
      from: "Audiophile <orders@resend.dev>",
      to: formData.email,
      subject: "Order Confirmation - Audiophile",
      html: `
        <h2>Thanks for your order, ${formData.name}!</h2>
        <p>We’ve received your order and will contact you soon for delivery details.</p>
        <h3>Order Summary</h3>
        <ul>
          ${cartItems
            .map(
              (item) =>
                `<li>${item.name} × ${item.quantity} — $${(
                  item.price * item.quantity
                ).toFixed(2)}</li>`
            )
            .join("")}
        </ul>
        <p><b>Total:</b> $${total.toFixed(2)}</p>
        <p>Delivery Address: ${formData.address}, ${formData.city}, ${formData.country}</p>
      `,
    });

    console.log("✅ Order saved & email sent");
    return { success: true };
  },
});
