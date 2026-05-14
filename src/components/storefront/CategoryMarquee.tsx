import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/catalog";

export function CategoryMarquee() {
  const renderCategories = (hidden = false) =>
    categories.map((category) => (
      <Link
        key={`${category.name}-${hidden ? "copy" : "main"}`}
        href={`/shop?category=${encodeURIComponent(category.name)}`}
        tabIndex={hidden ? -1 : undefined}
        aria-hidden={hidden}
        className="group flex min-w-[150px] touch-manipulation flex-col items-center gap-5 text-center max-md:min-w-[92px] max-md:max-w-[92px] max-md:gap-2.5"
      >
        <div className="relative h-[150px] w-[150px] overflow-hidden rounded-[22px] transition group-hover:scale-105 max-md:h-[78px] max-md:w-[78px] max-md:rounded-2xl">
          <Image
            src={category.image}
            alt={hidden ? "" : category.name}
            fill
            sizes="(max-width: 768px) 78px, 150px"
            className="object-cover"
          />
        </div>
        <span className="text-sm font-black uppercase tracking-[0.1em] text-neutral-950 max-md:w-full max-md:truncate max-md:text-[0.66rem] max-md:tracking-[0.02em]">
          {category.name}
        </span>
      </Link>
    ));

  return (
    <section className="py-6 text-center max-md:py-3">
      <div className="container-page mb-2 flex items-end justify-between gap-4 text-left">
        <Link
          href="/shop"
          className="max-w-[72%] text-[2.8rem] font-semibold leading-tight text-[#0B3221] transition hover:text-[#057429] max-md:text-2xl max-md:font-black"
          aria-label="Open Blits Pets Collection"
        >
          Blits Pets Collection
        </Link>
        <Link href="/shop" className="text-sm font-black text-[#057429]">
          View All
        </Link>
      </div>

      <div className="overflow-hidden pt-2 [mask-image:linear-gradient(to_right,transparent_0,rgba(0,0,0,.95)_8%,rgba(0,0,0,.95)_92%,transparent_100%)] max-md:[mask-image:none]">
        <div className="flex w-max animate-[categoryMarquee_36s_linear_infinite] items-start hover:[animation-play-state:paused]">
          <div className="flex w-max shrink-0 gap-[30px] px-[15px] max-md:gap-3 max-md:px-2.5">
            {renderCategories()}
          </div>
          <div className="flex w-max shrink-0 gap-[30px] px-[15px] max-md:gap-3 max-md:px-2.5">
            {renderCategories(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
