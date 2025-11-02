import GoBackButton from "@/components/layouts/GoBackButton";
import ProductFeature from "@/components/layouts/ProductFeature";
import data from "@/data/db.json";

export default async function ProductPage({ params }) {
  const resolvedParams = await params; // unwrap params safely
  const { slug } = resolvedParams;

  const product = data.data.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500">Product not found.</div>
    );
  }

  const productImage = product.image.desktop.replace("./", "/");

  return (
    <div className="py-10 max-w-[1440px] mx-auto">
      <GoBackButton />

      <ProductFeature
        title={product.name}
        description={product.description}
        image={productImage}
        price={product.price}
        quantity={1}
        buttonText="Add to Cart"
        href="#"
        isNew={product.new}
      />

      {/* features & desc */}
      <div className="flex justify-between items-center gap-8 max-lg:gap-16">
        <div className="w-1/2">
          <h3 className="text-4xl font-semibold mb-4 uppercase">Features</h3>
          <p className="whitespace-pre-line text-gray-700">
            {product.features}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2">
          <h3 className="text-4xl font-semibold mb-4 uppercase">in the box</h3>
          <ul className="space-y-2">
            {product.includes.map((include, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className="text-primary font-semibold">
                  {include.quantity}x
                </span>
                <span className="text-gray-700">{include.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
