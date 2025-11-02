import Image from "next/image";
import React from "react";

const Promotional = () => {
  return (
    <div className=" mt-10 mb-18 relative w-full bg-gray-200 rounded-lg flex items-center justify-between overflow-hidden text-black max-lg:flex-col-reverse max-lg:text-center">
      {/* Left Text Content */}
      <div className="w-1/2 flex flex-col justify-center items-start px-12  max-lg:w-full max-lg:items-center max-lg:px-6 max-lg:pt-10">
        <h4 className="text-4xl md:text-5xl font-bold uppercase mb-4 leading-tight">
          Bringing you the <br />
          <span className="text-primary">best</span> audio gear
        </h4>
        <p className="text-gray-800 pb-10 max-w-[500px] max-lg:pb-6">
          Located at the heart of New York City, Audiophile is the premium store
          for high-end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
        <button className="px-8 py-3 max-lg:mb-6 border border-black/80 text-black uppercase tracking-widest hover:bg-black/80 hover:text-white transition">
          See Product
        </button>
      </div>

      {/* Right Image */}
      <div className="w-1/2 flex justify-center items-end max-lg:w-full max-lg:justify-center max-lg:items-center max-lg:mt-6 -mr-11">
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="Best Gear"
          width={600}
          height={500}
          className="object-cover rounded-lg max-lg:w-full max-lg:h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default Promotional;
