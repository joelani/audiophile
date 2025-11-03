"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function CartModal({ isOpen, onClose, product }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-start justify-end">
      {/* Modal container */}
      <div className="bg-white w-full max-w-sm rounded-lg shadow-lg m-6 p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black text-lg"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4">Cart</h2>

        {/* Product info */}
        {product && (
          <div className="flex items-center gap-4 border-b pb-4 mb-4">
            <Image
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{product.name}</p>
              <p className="text-gray-500">${product.price}</p>
            </div>
            <p className="font-semibold">x1</p>
          </div>
        )}

        <button className="w-full bg-primary text-white py-3 rounded-md uppercase tracking-wide hover:bg-primary-light transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
