import CategoryGrid from "@/components/layouts/Categories";
import ProductFeature from "@/components/layouts/ProductFeature";
import Promotional from "@/components/layouts/Promotional";
import data from "@/data/db.json";

export default function HeadphonesPage() {
  // Filter all products that belong to the "headphones" category
  const headphones = data.data.filter(
    (product) => product.category === "headphones"
  );

  return (
    <div className="bg-gray-100 pt-16 lg:pt-20">
      <header className="w-full bg-black text-white  ">
        <h1 className="max-w-[1440px] text-center uppercase text-4xl md:text-6xl lg:text-7xl mx-auto md:py-16 py-8">
          Headphones
        </h1>
      </header>

      <main className="max-w-[1440px] mx-auto px-6">
        {headphones.map((product, i) => (
          <ProductFeature
            key={product.id}
            title={product.name}
            description={product.description}
            image={product.image.desktop.replace("./", "/")}
            reverse={i % 2 !== 0} // alternate layout for variety
            buttonText="See Product"
            href={`/products/${product.slug}`} //  dynamic slug
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
