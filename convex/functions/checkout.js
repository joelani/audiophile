import { mutation } from "../_generated/server";
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
  },
  handler: async (ctx, args) => {
    const orderId = await ctx.db.insert("orders", {
      ...args,
      status: "pending",
      createdAt: new Date().toISOString(),
    });
    return orderId;
  },
});
