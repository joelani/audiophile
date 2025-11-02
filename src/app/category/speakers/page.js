import CategoryGrid from "@/components/layouts/Categories";
import ProductFeature from "@/components/layouts/ProductFeature";
import Promotional from "@/components/layouts/Promotional";
import React from "react";

const page = () => {
  return (
    <div className=" bg-gray-100">
      <header className=" w-full bg-black text-white">
        <h1 className="max-w-[1440px] text-center uppercase text-7xl mx-auto md:py-16 py-8">
          Speakers
        </h1>
      </header>
      <main className="max-w-[1440px] mx-auto px-6">
        <ProductFeature
          title="ZX9 Speaker"
          subtitle=""
          description="Upgrade your sound system with all the new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity- creating new possiblities for more pleasing and practical audio setups"
          image="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
          reverse={false}
          buttonText="see product"
          href=""
          isNew
        />
        <ProductFeature
          title="ZX7 Speaker"
          subtitle=""
          description="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high end audiophile components that represents the top of the line powered speaker for home or studio use."
          image="/assets/product-xx59-headphones/desktop/image-product.jpg"
          reverse={true}
          buttonText="see product"
          href=""
          isNew={true}
        />

        {/* Categories */}
        <CategoryGrid />

        {/* Promotional */}
        <Promotional />
      </main>
    </div>
  );
};

export default page;
