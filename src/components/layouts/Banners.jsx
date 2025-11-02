import Image from "next/image";
import Link from "next/link";
import Promotional from "./Promotional";

export default function HomeBanners() {
  return (
    <section className="flex flex-col gap-8 px-6 max-w-[1440px] mx-auto py-20 w-full">
      {/* === Banner A === */}
      <div className="relative flex items-center justify-between bg-primary rounded-lg overflow-hidden w-full px-12 pt-16 text-white max-lg:flex-col max-lg:text-center max-lg:px-6 max-lg:pb-16">
        {/* Overlay Pattern */}
        <Image
          src="/assets/home/desktop/pattern-circles.svg"
          alt="circle pattern"
          width={900}
          height={900}
          className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-80 select-none pointer-events-none max-lg:-top-10 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:w-[600px]"
        />

        {/* Left: Product Image */}
        <div className="w-1/2 flex justify-center items-center z-10 max-lg:w-full max-lg:mb-10">
          <Image
            src="/assets/home/desktop/image-removebg-preview.png"
            alt="ZX9 Speaker"
            width={400}
            height={400}
            className="object-contain max-lg:w-[250px] max-lg:h-auto"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-1/2 flex flex-col justify-center items-start z-10 max-lg:w-full max-lg:items-center">
          <h2 className="text-5xl md:text-6xl font-bold uppercase mb-6 leading-tight">
            ZX9 Speaker
          </h2>
          <p className="text-white/80 max-w-sm mb-8 max-lg:max-w-md">
            Upgrade to premium speakers that are phenomenally built to deliver
            remarkable sound quality.
          </p>
          <button className="px-8 py-3 bg-black text-white uppercase tracking-widest hover:bg-black/80 transition">
            See Product
          </button>
        </div>
      </div>
      {/* === Banner B === */}
      <div className="relative w-full bg-gray-300/50 rounded-lg flex items-center overflow-hidden text-black h-[300px] md:h-[350px] lg:h-[400px]">
        {/* Left Text Content */}
        <div className="w-1/2 flex flex-col justify-center items-start px-12 z-10 max-md:w-full max-md:items-center max-md:text-center max-md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
            ZX7 Speaker
          </h2>
          <button className="px-8 py-3 border border-black text-black uppercase tracking-widest hover:bg-black hover:text-white transition">
            See Product
          </button>
        </div>

        {/* Right Background Image */}
        <div
          className="
      w-1/2 h-full
      bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')]
      bg-no-repeat bg-cover bg-position-[100%_50%]
      max-md:hidden
    "
          style={{ backgroundSize: "150%" }}
        />

        {/* Mobile / Tablet Responsive Image */}
        <div className="hidden max-md:block absolute inset-0">
          <Image
            src="/assets/home/tablet/image-speaker-zx7.jpg"
            alt="ZX7 Speaker"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>

      {/* === Banner C & D (side by side) === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Left – Image fills half */}
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right – Text Content */}
        <div className="flex flex-col justify-center items-start bg-gray-100 h-[300px] rounded-lg px-12">
          <h2 className="text-3xl font-bold uppercase mb-4">YX1 Earphones</h2>
          <button className="px-8 py-3 border border-black text-black uppercase tracking-widest hover:bg-black hover:text-white transition">
            See Product
          </button>
        </div>
      </div>

      {/* === Last Promotional Section === */}
      <Promotional />
    </section>
  );
}
