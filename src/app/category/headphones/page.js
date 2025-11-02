import CategoryGrid from "@/components/layouts/Categories";
import ProductFeature from "@/components/layouts/ProductFeature";
import Promotional from "@/components/layouts/Promotional";
import React from "react";

const page = () => {
  return (
    <div className=" bg-gray-100">
      <header className=" w-full bg-black text-white">
        <h1 className="max-w-[1440px] text-center uppercase text-7xl mx-auto md:py-16 py-8">
          Headphones
        </h1>
      </header>
      <main className="max-w-[1440px] mx-auto px-6">
        <ProductFeature
          title="XX99 mark ii headphones"
          subtitle=""
          description="The new XX99 MARK II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound"
          image="/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
          reverse={false}
          buttonText="see product"
          href=""
          isNew
        />
        <ProductFeature
          title="XX99 mark 1 headphones"
          subtitle=""
          description="As the gold standard for headphones, the classic XX99 Mark 1 offers detailed and accurate audio reproduction for audiophiles, mixing engineers and music africionados alike in studios and on the go."
          image="/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg"
          reverse={true}
          buttonText="see product"
          href=""
          isNew={false}
        />
        <ProductFeature
          title="XX99 mark 59 headphones"
          subtitle=""
          description="Enjoy your audio almost anywhere and customize it toyour specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move"
          image="/assets/product-xx59-headphones/desktop/image-product.jpg"
          reverse={false}
          buttonText="see product"
          href=""
          isNew={false}
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
