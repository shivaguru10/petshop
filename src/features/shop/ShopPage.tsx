import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/product/ProductGrid";
import { categories, filterProducts } from "@/lib/catalog";

export function ShopPage({
  category,
  search,
}: {
  category?: string;
  search?: string;
}) {
  const products = filterProducts({ category, search });
  const activeCategory = categories.find((item) => item.name === category);

  return (
    <div className="bg-[#FAFAF9]">
      <section className="container-page py-8">
        <div className="relative overflow-hidden rounded-lg bg-[#EEF5EE] px-6 py-8 text-[#0B3221] md:px-10">
          {activeCategory ? (
            <Image
              src={activeCategory.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-25"
            />
          ) : null}
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#145615]">
              Blits Pets Shop
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              {category || (search ? `Search: ${search}` : "Everything for pet care")}
            </h1>
            <p className="mt-3 text-sm leading-7 text-[#4F4F4F]">
              Browse food, medicine, cages, leashes, bowls, toys, bird supplies,
              and hamster essentials in one clean catalog.
            </p>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-8 pb-14 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-lg border border-[#E6EAE6] bg-[#FFFFFF] p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-[#DDE6DD] pb-4">
              <h2 className="text-sm font-black uppercase tracking-[0.12em]">
                Categories
              </h2>
              <Link href="/shop" className="text-xs font-black uppercase text-[#057429]">
                Clear
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
              <FilterLink href="/shop" active={!category}>
                All Products
              </FilterLink>
              {categories.map((item) => (
                <FilterLink
                  key={item.name}
                  href={`/shop?category=${encodeURIComponent(item.name)}`}
                  active={category === item.name}
                >
                  {item.name}
                </FilterLink>
              ))}
            </div>
          </div>
        </aside>

        <section>
          <div className="mb-5 flex flex-col gap-4 rounded-lg border border-[#E6EAE6] bg-[#FFFFFF] p-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#4F4F4F]">
                Showing {products.length} products
              </p>
              <h2 className="mt-1 text-2xl font-black">
                {category || (search ? "Matching pet supplies" : "Shop pet supplies")}
              </h2>
            </div>
            <select className="h-11 rounded-lg border border-[#DADFDA] bg-[#FFFFFF] px-4 text-sm font-semibold outline-none">
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          <ProductGrid products={products} />
        </section>
      </div>
    </div>
  );
}

function FilterLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-lg border px-3 py-2 text-sm font-bold transition ${
        active
          ? "border-[#037733] bg-[#037733] text-[#FFFFFF]"
          : "border-[#E4E7E4] bg-[#F8F8F8] text-[#365B39] hover:border-[#8FAF98] hover:text-[#145615]"
      }`}
    >
      {children}
    </Link>
  );
}
