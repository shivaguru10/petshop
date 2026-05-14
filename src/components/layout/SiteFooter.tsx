import Link from "next/link";
import { categories } from "@/lib/catalog";

export function SiteFooter() {
  const quickCategories = categories.slice(0, 6);

  return (
    <footer className="mt-20 bg-[#013720] py-12 text-[#F4FBF7] max-md:mt-12 max-md:py-8">
      <div className="container-page grid gap-10 md:grid-cols-[1.35fr_1fr_1fr_1fr] max-md:hidden">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#145615]">
              <PawIcon />
            </span>
            <h2 className="text-2xl font-black tracking-[0.12em]">BLITS PETS</h2>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#AACABA]">
            Pet food, bird and hamster supplies, medicine, accessories, and
            cages for everyday pet care.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-[#0B412A] px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-[#BBD9CA]">
              Food
            </span>
            <span className="rounded-full border border-[#0B412A] px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-[#BBD9CA]">
              Live Pets
            </span>
            <span className="rounded-full border border-[#0B412A] px-3 py-1 text-xs font-black uppercase tracking-[0.08em] text-[#BBD9CA]">
              Care
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.16em]">
            Shop
          </h3>
          <div className="mt-5 grid gap-2 text-sm text-[#AACABA]">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/shop?category=${encodeURIComponent(category.name)}`}
                className="hover:text-[#F4FBF7]"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.16em]">
            Pages
          </h3>
          <div className="mt-5 grid gap-2 text-sm text-[#AACABA]">
            <Link href="/" className="hover:text-[#F4FBF7]">Home</Link>
            <Link href="/shop" className="hover:text-[#F4FBF7]">Shop All</Link>
            <Link href="/wishlist" className="hover:text-[#F4FBF7]">Wishlist</Link>
            <Link href="/cart" className="hover:text-[#F4FBF7]">Cart</Link>
          </div>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.16em]">
            Policies
          </h3>
          <div className="mt-5 grid gap-2 text-sm text-[#AACABA]">
            <Link href="/shop" className="hover:text-[#F4FBF7]">Shipping Policy</Link>
            <Link href="/shop" className="hover:text-[#F4FBF7]">Return Policy</Link>
            <Link href="/shop" className="hover:text-[#F4FBF7]">Privacy Policy</Link>
            <Link href="/shop" className="hover:text-[#F4FBF7]">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <div className="container-page hidden max-md:block">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#145615]">
              <PawIcon />
            </span>
            <div className="min-w-0">
              <h2 className="truncate text-lg font-black tracking-[0.1em]">
                BLITS PETS
              </h2>
              <p className="text-xs font-semibold text-[#AACABA]">
                Food, pets, cages, care.
              </p>
            </div>
          </div>
          <Link
            href="/shop"
            className="shrink-0 rounded-full bg-[#057429] px-4 py-2 text-xs font-black uppercase text-white"
          >
            Shop
          </Link>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {quickCategories.map((category) => (
            <Link
              key={category.name}
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              className="shrink-0 rounded-full border border-[#0B412A] px-3 py-2 text-xs font-bold text-[#BBD9CA]"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 text-xs text-[#AACABA]">
          <Link href="/shop" className="hover:text-[#F4FBF7]">Shipping Policy</Link>
          <Link href="/shop" className="hover:text-[#F4FBF7]">Return Policy</Link>
          <Link href="/shop" className="hover:text-[#F4FBF7]">Privacy Policy</Link>
          <Link href="/shop" className="hover:text-[#F4FBF7]">Terms</Link>
        </div>
      </div>

      <div className="container-page mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#0B412A] pt-6 text-xs uppercase tracking-[0.12em] text-[#BBD9CA] max-md:mt-6 max-md:flex-col max-md:items-start max-md:gap-2 max-md:tracking-[0.06em]">
        <span>Copyright 2026 Blits Pets. All rights reserved.</span>
        <a
          href="https://www.blitzsolutions.online/"
          target="_blank"
          rel="noreferrer"
          className="text-[#F4FBF7] hover:text-[#AACABA]"
        >
          Designed & Developed by Blitz Solutions
        </a>
      </div>
    </footer>
  );
}

function PawIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <circle cx="7.5" cy="8" r="2.2" fill="currentColor" />
      <circle cx="12" cy="6.4" r="2.2" fill="currentColor" />
      <circle cx="16.5" cy="8" r="2.2" fill="currentColor" />
      <path d="M7 17.2c0-3 2.2-5.2 5-5.2s5 2.2 5 5.2c0 1.7-1.1 2.8-2.5 2.8-.9 0-1.5-.4-2.5-.4s-1.6.4-2.5.4C8.1 20 7 18.9 7 17.2Z" fill="currentColor" />
    </svg>
  );
}
