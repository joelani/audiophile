"use client";

import { use } from "react"; // ✅ import React.use()
import { useState } from "react";
import CategoryGrid from "@/components/layouts/Categories";
import GoBackButton from "@/components/layouts/GoBackButton";
import ImageGrid from "@/components/layouts/ImageGrid";
import ProductCollection from "@/components/layouts/ProductCollection";
import ProductFeature from "@/components/layouts/ProductFeature";
import data from "@/data/db.json";
import CartModal from "@/components/layouts/CartModal";

export default function ProductPage({ params }) {
  const { slug } = use(params); // ✅ unwrap params safely

  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleAddToCart = () => setIsCartOpen(true);

  const product = data.data.find((p) => p.slug === slug);

  if (!product)
    return (
      <div className="p-10 text-center text-red-500">Product not found.</div>
    );

  const productImage = product.image.desktop.replace("./", "/");
  const gallery = [
    product.gallery.first.desktop.replace("./", "/"),
    product.gallery.second.desktop.replace("./", "/"),
    product.gallery.third.desktop.replace("./", "/"),
  ];

  return (
    <div className="py-10 max-w-[1440px] mx-auto">
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        product={{
          name: product.name,
          price: product.price,
          image: productImage,
        }}
      />
      <GoBackButton />
      <ProductFeature
        title={product.name}
        description={product.description}
        image={productImage}
        price={product.price}
        quantity={1}
        buttonText="Add to Cart"
        href="#"
        isNew={product.new}
        onAddToCart={handleAddToCart}
      />
      <section className="max-w-[1100px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-20 px-6 sm:px-8 md:px-12 py-16">
        <div className="flex-1">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 uppercase tracking-wide">
            Features
          </h3>
          <p className="whitespace-pre-line text-gray-700 leading-relaxed text-base md:text-lg">
            {product.features}
          </p>
        </div>
        <div className="flex-1 lg:max-w-[380px] w-full max-lg:flex max-lg:gap-14">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 uppercase tracking-wide">
            In the Box
          </h3>
          <ul className="space-y-3">
            {product.includes.map((include, i) => (
              <li
                key={i}
                className="flex items-center gap-4 text-base md:text-lg"
              >
                <span className="text-primary font-semibold w-10 text-right">
                  {include.quantity}x
                </span>
                <span className="text-gray-700">{include.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ImageGrid images={gallery} />
      <ProductCollection products={product.others} />
      <CategoryGrid />
    </div>
  );
}
