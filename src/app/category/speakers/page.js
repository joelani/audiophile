import CategoryGrid from "@/components/layouts/Categories";
import ProductFeature from "@/components/layouts/ProductFeature";
import Promotional from "@/components/layouts/Promotional";
import data from "@/data/db.json";

export default function SpeakersPage() {
  // Filter all products that belong to the "speakers" category
  const speakers = data.data.filter(
    (product) => product.category === "speakers"
  );

  return (
    <div className="bg-gray-100">
      <header className="w-full bg-black text-white lg:mt-7">
        <h1 className="max-w-[1440px] text-center uppercase text-7xl mx-auto md:py-16 py-8">
          Speakers
        </h1>
      </header>

      <main className="max-w-[1440px] mx-auto px-6">
        {speakers.map((product, i) => (
          <ProductFeature
            key={product.id}
            title={product.name}
            description={product.description}
            image={product.image.desktop.replace("./", "/")}
            reverse={i % 2 !== 0} // alternate layout
            buttonText="See Product"
            href={`/products/${product.slug}`} // ✅ works dynamically
            isNew={product.new}
          />
        ))}

        {/* Categories */}
        <CategoryGrid />

        {/* Promotional */}
        <Promotional />
      </main>
    </div>
  );
}
