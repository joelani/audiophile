// import React from "react";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="max-w-[1440px] mx-auto 
        flex flex-col items-center justify-center text-center text-white
        bg-[url('/assets/home/mobile/image-header.jpg')]
        md:bg-[url('/assets/home/tablet/image-header.jpg')]
        bg-cover bg-center bg-no-repeat
        md:text-left md:items-start md:px-10
        lg:flex-row lg:bg-none lg:py-20 lg:justify-between lg:w-full lg:max-h-lvh relative max-lg:h-screen max-lg:-mt-20
      "
    >
      {/* Left Content (text) */}
      <div className="max-w-md space-y-4 lg:max-w-lg px-6 lg:px-0 my-auto max-lg:mx-auto max-lg:text-center">
        <p className="uppercase tracking-[8px] text-gray-400">New Product</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          XX99 Mark II Headphones
        </h1>
        <p className="text-gray-300">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="mt-6 px-8 py-3 bg-primary text-white uppercase tracking-widest hover:bg-primary-light transition">
          See Product
        </button>
      </div>
      {/* Right Image (desktop only) */}
      <div
        className=" z-20
          hidden lg:block
          w-1/2 h-[500px]
          bg-[url('/assets/home/desktop/image-hero.jpg')]
          bg-no-repeat  bg-cover
        "
        style={{
          backgroundSize: "200%", // zooms in by 20%
          backgroundPosition: "85% 75%",
        }}
      />

      {/* Radial gradient behind image */}
      <div className="hidden absolute lg:flex items-center justify-center right-5 -top-35 z-10">
        <div
          className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(26,26,26,1),rgba(10,10,10,0.1))]
 blur-xl"
        />
      </div>
    </section>
  );
}
