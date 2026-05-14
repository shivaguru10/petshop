import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  products,
  variant = "default",
}: {
  products: Product[];
  variant?: "default" | "related";
}) {
  if (!products.length) {
    return (
      <div className="border border-[#E6EAE6] bg-[#F8F8F8] p-10 text-center">
        <h2 className="text-xl font-black">No products found</h2>
        <p className="mt-2 text-[#4F4F4F]">Try another category or search.</p>
      </div>
    );
  }

  return (
    <div
      className={
        variant === "related"
          ? "grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-4"
          : "shop-product-grid grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      }
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variant={variant} />
      ))}
    </div>
  );
}
