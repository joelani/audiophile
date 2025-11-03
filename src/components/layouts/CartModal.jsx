"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";

export default function CartModal() {
  const { cartItems, isCartOpen, closeCart, clearCart } = useCart();

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "auto";
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-end">
      <div className="bg-white w-full max-w-sm rounded-lg shadow-lg m-6 p-6 relative">
        <button
          onClick={closeCart}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-lg"
        >
          ×
        </button>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Cart ({cartItems.length})</h2>
          <button
            onClick={clearCart}
            className="text-gray-500 hover:text-black text-sm underline"
          >
            Remove all
          </button>
        </div>

        <div className="space-y-4 max-h-[300px] overflow-y-auto">
          {cartItems.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-sm">${item.price}</p>
              </div>
              <p className="font-semibold text-sm">x{item.quantity}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <span className="uppercase text-gray-600 text-sm">Total</span>
          <span className="font-semibold text-lg">${total.toFixed(2)}</span>
        </div>

        <button className="w-full mt-6 bg-primary text-white py-3 rounded-md uppercase tracking-wide hover:bg-primary-light transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
