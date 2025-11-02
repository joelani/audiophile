import CategoryGrid from "@/components/layouts/Categories";
import ProductFeature from "@/components/layouts/ProductFeature";
import Promotional from "@/components/layouts/Promotional";
import data from "@/data/db.json";

export default function EarphonesPage() {
  // ✅ Since your JSON is { data: [...] }
  const earphones = data.data.filter(
    (product) => product.category === "earphones"
  );

  return (
    <div className="bg-gray-100">
      <header className="w-full bg-black text-white">
        <h1 className="max-w-[1440px] text-center uppercase text-7xl mx-auto md:py-16 py-8">
          Earphones
        </h1>
      </header>

      <main className="max-w-[1440px] mx-auto px-6">
        {earphones.map((product, i) => (
          <ProductFeature
            key={product.id}
            title={product.name}
            description={product.description}
            image={product.image.desktop.replace("./", "/")}
            reverse={i % 2 !== 0}
            buttonText="See Product"
            href={`/products/${product.slug}`} // ✅ Works with slug
            isNew={product.new}
          />
        ))}

        <CategoryGrid />
        <Promotional />
      </main>
    </div>
  );
}
