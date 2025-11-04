import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    city: v.string(),
    country: v.string(),
    zip: v.string(),
    paymentMethod: v.string(),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    subtotal: v.number(),
    shipping: v.number(),
    tax: v.number(),
    total: v.number(),
    status: v.string(),
    createdAt: v.string(),
  },
  handler: async (ctx, args) => {
    // Insert the new order into Convex
    const orderId = await ctx.db.insert("orders", args);

    console.log(" Order saved successfully:", orderId);

    return { success: true, orderId };
  },
});
