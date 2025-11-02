import Image from "next/image";
import Link from "next/link";

export default function ProductFeature({
  title,
  subtitle,
  description,
  image,
  reverse = false,
  buttonText = "See Product",
  href = "#",
  isNew = false,
}) {
  return (
    <section
      className={`
        flex flex-col lg:flex-row items-center justify-between gap-10
        ${reverse ? "lg:flex-row-reverse" : ""}
        max-w-[1200px] mx-auto px-6 py-16
      `}
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

      {/* Text Content */}
      <div
        className="
          w-full lg:w-1/2 flex flex-col justify-center
          items-center lg:items-start text-center lg:text-left space-y-6
        "
      >
        {isNew && (
          <p className="uppercase tracking-[10px] text-primary font-semibold">
            New Product
          </p>
        )}

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-snug">
          {title}
        </h2>

        {subtitle && (
          <h3 className="text-xl md:text-2xl text-gray-600 font-medium">
            {subtitle}
          </h3>
        )}

        <p className="text-gray-600 max-w-md">{description}</p>

        <Link
          href={href}
          className="mt-4 px-8 py-3 bg-primary text-white uppercase tracking-widest hover:bg-primary-light transition"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
