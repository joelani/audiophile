"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductFeature({
  title,
  subtitle,
  description,
  image,
  reverse = false,
  buttonText = "See Product",
  href = "#",
  isNew = false,
  price,
  quantity,
  onAddToCart, // ✅ new prop
}) {
  const [count, setCount] = useState(quantity || 1);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section
      className={`flex flex-col items-center justify-between gap-10 max-w-[1100px] mx-auto py-16 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="bg-gray-100 rounded-lg p-8 w-full">
          <Image
            src={image}
            alt={title}
            width={600}
            height={600}
            className="object-contain w-full h-auto mx-auto"
            priority
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
        {isNew && (
          <p className="uppercase tracking-[10px] text-primary font-semibold">
            New Product
          </p>
        )}

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-snug">
          {title}
        </h2>

        <p className="text-gray-600 max-w-md">{description}</p>

        {price && (
          <p className="text-2xl font-semibold text-gray-800">${price}</p>
        )}

        {typeof quantity !== "undefined" ? (
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-gray-200 px-4 py-2 rounded-md">
              <button
                onClick={decrement}
                className="text-gray-700 font-bold px-2 hover:text-primary"
              >
                –
              </button>
              <span className="mx-3 font-semibold">{count}</span>
              <button
                onClick={increment}
                className="text-gray-700 font-bold px-2 hover:text-primary"
              >
                +
              </button>
            </div>

            {/* ✅ Add-to-cart button triggers modal */}
            <button
              onClick={() => addToCart(product)}
              className="px-8 py-3 bg-primary text-white uppercase tracking-widest hover:bg-primary-light transition rounded-md"
            >
              {buttonText}
            </button>
          </div>
        ) : (
          <Link
            href={href}
            className="mt-4 px-8 py-3 bg-primary text-white uppercase tracking-widest hover:bg-primary-light transition rounded-md"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
