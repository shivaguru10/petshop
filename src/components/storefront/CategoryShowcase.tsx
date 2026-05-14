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
    <section className="container-page overflow-hidden py-10 max-md:py-8">
      <div className="mb-8 flex flex-col gap-2 max-md:mb-6">
        <p className="section-kicker">Shop by need</p>
        <h2 className="text-3xl font-black max-md:text-2xl">
          Find the right shelf fast
        </h2>
      </div>
      <div className="grid gap-10 max-md:gap-8">
        {showcaseCategories.map((category) => {
          const isSpecial = specialCategories.has(category);
          const items = subcategoryShowcases[category];

          return (
            <section key={category} className="min-w-0 overflow-hidden">
              <div className="mb-4 flex items-end justify-between gap-4 max-md:mb-3">
                <div className="min-w-0">
                  {isSpecial ? null : (
                    <p className="section-kicker">{category.toUpperCase()}</p>
                  )}
                  <h2
                    className={
                      isSpecial
                        ? "text-2xl font-black uppercase tracking-[0.06em]"
                        : "mt-1 text-2xl font-bold max-md:text-xl"
                    }
                  >
                    {isSpecial ? category.toUpperCase() : category}
                  </h2>
                </div>
                {isSpecial ? null : (
                  <Link
                    href={`/shop?category=${encodeURIComponent(category)}`}
                    className="shrink-0 text-xs font-black uppercase tracking-[0.14em] text-[#057429] max-md:text-[0.62rem]"
                  >
                    View All
                  </Link>
                )}
              </div>

              {isSpecial ? <div className="mb-5 border-t border-[#DDE6DD]" /> : null}

              <div
                className={
                  isSpecial
                    ? "flex max-w-full snap-x gap-3 overflow-x-auto overscroll-x-contain pb-[15px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-4 md:gap-5 md:overflow-visible md:pb-0"
                    : "flex max-w-full snap-x gap-3 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                          ? "group flex w-[116px] flex-[0_0_116px] snap-start flex-col overflow-hidden rounded-lg border border-[#E6EAE6] bg-[#FFFFFF] transition duration-300 hover:-translate-y-1 hover:bg-[#F3F6F4] hover:shadow-[0_15px_35px_#E8ECE8] sm:w-[140px] sm:flex-[0_0_140px] md:w-full md:flex-auto"
                          : "group relative aspect-[3/4] w-[112px] flex-[0_0_112px] snap-start overflow-hidden rounded-xl sm:w-36 sm:flex-[0_0_144px] md:min-w-52 md:flex-auto md:rounded-2xl"
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
                            <span className="line-clamp-2 text-base font-black text-white max-md:text-[0.7rem] max-md:leading-tight">
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
