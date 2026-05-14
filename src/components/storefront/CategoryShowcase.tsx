import Image from "next/image";
import Link from "next/link";
import {
  showcaseCategories,
  subcategoryShowcases,
} from "@/lib/home-sections";
import { filterProducts } from "@/lib/catalog";

const specialCategories = new Set(["Pet Medicine", "Accessories", "Cages"]);

export function CategoryShowcase() {
  return (
    <section className="container-page py-10">
      <div className="mb-8 flex flex-col gap-2">
        <p className="section-kicker">Shop by need</p>
        <h2 className="text-3xl font-black">Find the right shelf fast</h2>
      </div>
      <div className="grid gap-10">
        {showcaseCategories.map((category) => {
          const isSpecial = specialCategories.has(category);
          const items = subcategoryShowcases[category];

          return (
            <section key={category}>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  {isSpecial ? null : (
                    <p className="section-kicker">{category.toUpperCase()}</p>
                  )}
                  <h2
                    className={
                      isSpecial
                        ? "text-2xl font-black uppercase tracking-[0.06em]"
                        : "mt-1 text-2xl font-bold"
                    }
                  >
                    {isSpecial ? category.toUpperCase() : category}
                  </h2>
                </div>
                {isSpecial ? null : (
                  <Link
                    href={`/shop?category=${encodeURIComponent(category)}`}
                    className="text-xs font-black uppercase tracking-[0.14em] text-[#057429]"
                  >
                    View All
                  </Link>
                )}
              </div>

              {isSpecial ? <div className="mb-5 border-t border-[#DDE6DD]" /> : null}

              <div
                className={
                  isSpecial
                    ? "flex gap-3 overflow-x-auto pb-[15px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:pb-0"
                    : "flex gap-3 overflow-x-auto pb-2"
                }
              >
                {items.map((item) => {
                  const matchedProduct = filterProducts({
                    category,
                    search: item.name,
                  })[0];
                  const href = matchedProduct
                    ? `/product/${matchedProduct.id}`
                    : `/shop?category=${encodeURIComponent(category)}`;

                  return (
                    <Link
                      key={item.name}
                      href={href}
                      className={
                        isSpecial
                          ? "group flex w-[140px] flex-[0_0_140px] flex-col overflow-hidden rounded-lg border border-[#E6EAE6] bg-[#FFFFFF] transition duration-300 hover:-translate-y-1 hover:bg-[#F3F6F4] hover:shadow-[0_15px_35px_#E8ECE8] md:w-full md:flex-auto"
                          : "group relative aspect-[3/4] min-w-36 overflow-hidden rounded-2xl md:min-w-52"
                      }
                    >
                      {isSpecial ? (
                        <>
                          <div className="relative aspect-square overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="(max-width: 768px) 140px, 20vw"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="grid min-h-[46px] place-items-center bg-[#EEF5EE] px-1 py-2 text-center text-[0.74rem] font-black uppercase leading-tight tracking-[0.02em] text-[#037733] md:min-h-0 md:py-2.5 md:text-[0.82rem]">
                            {item.name}
                          </div>
                        </>
                      ) : (
                        <>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="220px"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                            <span className="text-base font-black text-white">
                              {item.name}
                            </span>
                          </div>
                        </>
                      )}
                    </Link>
                  );
                })}
              </div>

              {isSpecial ? (
                <Link
                  href={`/shop?category=${encodeURIComponent(category)}`}
                  className="mt-5 block rounded-lg bg-[#0A5D0A] px-5 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#006020]"
                >
                  View More Products
                </Link>
              ) : null}
            </section>
          );
        })}
      </div>
    </section>
  );
}
