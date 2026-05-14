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
      <section className="container-page py-8 max-md:py-4">
        <div className="relative overflow-hidden rounded-lg bg-[#EEF5EE] px-6 py-8 text-[#0B3221] md:px-10 max-md:px-4 max-md:py-5">
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
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl max-md:text-2xl">
              {category || (search ? `Search: ${search}` : "Everything for pet care")}
            </h1>
            <p className="mt-3 text-sm leading-7 text-[#4F4F4F] max-md:text-xs max-md:leading-5">
              Browse food, medicine, cages, leashes, bowls, toys, bird supplies,
              and hamster essentials in one clean catalog.
            </p>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-6 pb-14 lg:grid-cols-[240px_1fr] max-md:gap-4">
        <aside className="z-30 lg:sticky lg:top-32 lg:self-start max-lg:sticky max-lg:top-[64px] max-lg:-mx-10 max-lg:bg-[#FAFAF9]/95 max-lg:px-10 max-lg:py-3 max-lg:backdrop-blur max-md:-mx-4 max-md:px-4">
          <div className="rounded-lg border border-[#E6EAE6] bg-[#FFFFFF] p-4 shadow-sm max-lg:border-0 max-lg:bg-transparent max-lg:p-0 max-lg:shadow-none">
            <div className="mb-4 flex items-center justify-between border-b border-[#DDE6DD] pb-4 max-lg:mb-2 max-lg:border-0 max-lg:pb-0">
              <h2 className="text-sm font-black uppercase tracking-[0.12em]">
                Categories
              </h2>
              <Link href="/shop" className="text-xs font-black uppercase text-[#057429]">
                Clear
              </Link>
            </div>
            <div className="grid gap-2 lg:grid-cols-1 max-lg:flex max-lg:overflow-x-auto max-lg:pb-1 max-lg:[scrollbar-width:none] max-lg:[&::-webkit-scrollbar]:hidden">
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
          <div className="mb-5 flex flex-col gap-4 rounded-lg border border-[#E6EAE6] bg-[#FFFFFF] p-4 md:flex-row md:items-center md:justify-between max-md:mb-4 max-md:gap-3 max-md:p-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[#4F4F4F] max-md:text-[0.65rem]">
                Showing {products.length} products
              </p>
              <h2 className="mt-1 text-2xl font-black max-md:text-xl">
                {category || (search ? "Matching pet supplies" : "Shop pet supplies")}
              </h2>
            </div>
            <select className="h-11 rounded-lg border border-[#DADFDA] bg-[#FFFFFF] px-4 text-sm font-semibold outline-none max-md:h-10 max-md:w-full">
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
      className={`rounded-lg border px-3 py-2 text-sm font-bold transition max-lg:shrink-0 max-lg:whitespace-nowrap max-lg:rounded-full max-lg:px-4 max-lg:text-xs ${
        active
          ? "border-[#037733] bg-[#037733] text-[#FFFFFF]"
          : "border-[#E4E7E4] bg-[#FFFFFF] text-[#365B39] hover:border-[#8FAF98] hover:text-[#145615] lg:bg-[#F8F8F8]"
      }`}
    >
      {children}
    </Link>
  );
}
