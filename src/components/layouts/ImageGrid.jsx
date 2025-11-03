import Image from "next/image";

export default function ImageGrid({ images }) {
  if (!images || images.length < 3) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto max-lg:mx-5 py-12">
      {/* Left Column */}
      <div className="flex flex-col gap-6">
        <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden">
          <Image
            src={images[0]}
            alt="Gallery image 1"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden">
          <Image
            src={images[1]}
            alt="Gallery image 2"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="relative w-full md:row-span-2 aspect-8/9 md:h-full rounded-lg overflow-hidden">
        <Image
          src={images[2]}
          alt="Gallery image 3"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
