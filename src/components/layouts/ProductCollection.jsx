"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCollection({ products = [] }) {
  if (!products.length) return null;

  return (
    <section className="max-w-[1100px] mx-auto text-center py-16 px-6">
      <h2 className="uppercase text-3xl md:text-4xl font-semibold mb-12">
        You may also like
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item, i) => {
          const img = item.image.desktop.replace("./", "/");

          return (
            <div key={i} className="flex flex-col items-center gap-6">
              {/* Image wrapper */}
              <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={img}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text + Button */}
              <h3 className="text-2xl font-semibold uppercase">{item.name}</h3>
              <Link
                href={`/products/${item.slug}`}
                className="px-6 py-3 bg-primary text-white uppercase tracking-widest hover:bg-primary-light transition rounded-md"
              >
                See Product
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
