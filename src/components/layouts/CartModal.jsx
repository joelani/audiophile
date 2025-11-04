"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartModal() {
  const {
    cartItems,
    isCartOpen,
    closeCart,
    clearCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "auto";
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Click outside to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeCart();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/60 z-50 flex items-start justify-end"
    >
      {/*  Modal */}
      <div
        className="bg-white w-full max-w-sm rounded-lg shadow-lg m-6 p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={closeCart}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-lg"
        >
          ×
        </button>

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Cart ({cartItems.length})</h2>
          <button
            onClick={clearCart}
            className="text-gray-500 hover:text-black text-sm underline"
          >
            Remove all
          </button>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 max-h-[300px] overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4 border-b border-gray-100 pb-3"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-gray-500 text-sm">${item.price}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 border px-2 py-1 rounded-md">
                    <button
                      onClick={() => decreaseQuantity(item.name)}
                      className="text-gray-700 hover:text-primary font-bold"
                    >
                      –
                    </button>
                    <span className="w-6 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.name)}
                      className="text-gray-700 hover:text-primary font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/*  Remove single product */}
                  {item.quantity === 1 && (
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-xs text-red-500 hover:text-red-700 mt-1"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/*  Total */}
        <div className="flex justify-between items-center mt-6">
          <span className="uppercase text-gray-600 text-sm">Total</span>
          <span className="font-semibold text-lg">${total.toFixed(2)}</span>
        </div>

        {/* Checkout Button */}
        <Link
          href="/checkout"
          onClick={closeCart} // ✅ closes the modal
          className="block text-center w-full mt-6 bg-primary text-white py-3 rounded-md uppercase tracking-wide hover:bg-primary-light transition"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
