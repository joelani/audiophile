"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ThankYouModal({ isOpen, total, onClose }) {
  const { cartItems, clearCart } = useCart();
  const router = useRouter();

  if (!isOpen) return null;

  const handleBackHome = () => {
    clearCart();
    onClose();
    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 animate-fadeIn shadow-lg">
        <div className="flex flex-col items-start gap-4">
          {/* Check icon */}
          <div className="bg-primary rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M20.285 2.857L9 14.142 3.714 8.856 2.3 10.27 9 16.97 21.7 4.27z" />
            </svg>
          </div>

          {/* Text */}
          <h2 className="text-2xl sm:text-3xl font-semibold uppercase">
            Thank you
            <br />
            for your order
          </h2>
          <p className="text-gray-500 text-sm">
            You will receive an email confirmation shortly.
          </p>
        </div>

        {/* Summary box */}
        <div className="flex flex-col sm:flex-row mt-6 rounded-lg overflow-hidden border border-gray-200">
          <div className="flex-1 bg-gray-50 p-4 space-y-3 max-h-[200px] overflow-y-auto">
            {cartItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-md object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-500">${item.price}</p>
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-600">
                  x{item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-black text-white flex flex-col justify-center items-start p-6 sm:w-[180px]">
            <p className="text-gray-400 text-xs uppercase mb-1">Grand Total</p>
            <p className="text-lg font-semibold">${total.toFixed(2)}</p>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={handleBackHome}
          className="w-full mt-6 bg-primary hover:bg-primary-light text-white py-3 rounded-md uppercase tracking-wide transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
