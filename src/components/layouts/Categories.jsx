import Image from "next/image";
import Link from "next/link";

export default function CategoryGrid() {
  return (
    <section className="flex justify-center items-center px-6 max-w-[1440px] mx-auto py-20 z-30 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {/* === 1. HEADPHONES === */}
        <div className="relative flex flex-col items-center justify-center rounded-lg py-10 overflow-hidden group hover:-translate-y-2 transition-transform shadow-md hover:shadow-lg bg-transparent">
          {/* grey base behind product */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gray-200 rounded-b-lg" />

          {/* content */}
          <div className="relative z-10 flex flex-col items-center">
            <Image
              width={200}
              height={200}
              src="/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
              alt="Headphones"
              className="mb-6"
            />
            <h2 className="text-lg font-semibold tracking-wide uppercase mb-3">
              Headphones
            </h2>
            <Link
              href="/category/headphones"
              className="flex items-center gap-2 text-primary text-sm tracking-widest uppercase"
            >
              <span>Shop</span>
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow-icon"
                width={8}
                height={8}
              />
            </Link>
          </div>
        </div>

        {/* === 2. SPEAKERS === */}
        <div className="relative flex flex-col items-center justify-center rounded-lg py-10 overflow-hidden group hover:-translate-y-2 transition-transform shadow-md hover:shadow-lg bg-transparent">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gray-200 rounded-b-lg" />

          <div className="relative z-10 flex flex-col items-center">
            <Image
              width={200}
              height={200}
              src="/assets/home/desktop/image-speaker-zx9.png"
              alt="Speakers"
              className="mb-6"
            />
            <h2 className="text-lg font-semibold tracking-wide uppercase mb-3">
              Speakers
            </h2>
            <Link
              href="/category/speakers"
              className="flex items-center gap-2 text-primary text-sm tracking-widest uppercase"
            >
              <span>Shop</span>
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow-icon"
                width={8}
                height={8}
              />
            </Link>
          </div>
        </div>

        {/* === 3. EARPHONES === */}
        <div className="relative flex flex-col items-center justify-center rounded-lg py-10 overflow-hidden group hover:-translate-y-2 transition-transform shadow-md hover:shadow-lg bg-transparent">
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gray-200 rounded-b-lg" />

          <div className="relative z-10 flex flex-col items-center">
            <Image
              width={200}
              height={200}
              src="/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
              alt="Earphones"
              className="mb-6"
            />
            <h2 className="text-lg font-semibold tracking-wide uppercase mb-3">
              Earphones
            </h2>
            <Link
              href="/category/earphones"
              className="flex items-center gap-2 text-primary text-sm tracking-widest uppercase"
            >
              <span>Shop</span>
              <Image
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="arrow-icon"
                width={8}
                height={8}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
