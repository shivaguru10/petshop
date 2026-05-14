"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { getDiscountedPrice } from "@/lib/catalog";
import { useCart } from "@/features/cart/CartProvider";
import { useWishlist } from "@/features/wishlist/WishlistProvider";

export function ProductCard({
  product,
  variant = "default",
}: {
  product: Product;
  variant?: "default" | "related";
}) {
  const { addItem } = useCart();
  const wishlist = useWishlist();
  const price = getDiscountedPrice(product);

  return (
    <article className="group overflow-hidden rounded-lg border border-[#E6EAE6] bg-[#FFFFFF] transition hover:-translate-y-1 hover:bg-[#F3F6F4] hover:shadow-[0_18px_40px_#E8ECE8]">
      <Link href={`/product/${product.id}`} className="block">
        <div
          className={`relative overflow-hidden bg-[#FDFEFD] ${
            variant === "related" ? "aspect-[4/3] md:aspect-[4/5]" : "aspect-[4/5]"
          }`}
        >
          <div className="absolute left-2 top-2 z-10 grid gap-2 md:left-3 md:top-3">
            {product.isBestSeller ? <Badge>Best Seller</Badge> : null}
            {product.isNewArrival ? <Badge>New</Badge> : null}
            {product.isTrending ? <Badge>Trending</Badge> : null}
          </div>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 hidden bg-[#FFFFFF]/95 py-3 text-center text-xs font-black uppercase tracking-[0.12em] text-[#365B39] md:block">
            View Details
          </div>
        </div>
      </Link>

      <div className={variant === "related" ? "grid gap-1.5 p-2.5 md:gap-2 md:p-3" : "grid gap-2 p-3"}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className={variant === "related" ? "truncate text-[0.66rem] font-black uppercase tracking-[0.02em] text-[#1F1F1F] md:text-sm md:tracking-[0.08em]" : "truncate text-sm font-black uppercase tracking-[0.08em] text-[#1F1F1F]"}>
              {product.brand}
            </h3>
            <p className={variant === "related" ? "line-clamp-2 min-h-[2.2rem] text-[0.76rem] leading-[1.1rem] text-[#4F4F4F] md:min-h-[2.5rem] md:text-sm md:leading-normal" : "line-clamp-2 min-h-[2.5rem] text-sm text-[#4F4F4F]"}>
              {product.name}
            </p>
          </div>
          <button
            type="button"
            className="hidden h-8 w-8 shrink-0 place-items-center rounded-full bg-[#F8F8F8] text-[#438342] transition hover:bg-[#EEF5EE] md:grid"
            onClick={() => wishlist.toggle(product.id)}
            aria-label="Toggle wishlist"
          >
            <HeartIcon filled={wishlist.has(product.id)} />
          </button>
        </div>
        <div className={variant === "related" ? "flex flex-wrap items-baseline gap-1 text-[0.78rem] md:gap-2 md:text-sm" : "flex flex-wrap items-baseline gap-2 text-sm"}>
          <strong>Rs. {price.toLocaleString("en-IN")}</strong>
          {product.discount ? (
            <span className="text-xs text-[#4F4F4F] line-through">
              Rs. {product.price.toLocaleString("en-IN")}
            </span>
          ) : null}
        </div>
        <div className={variant === "related" ? "mt-1 grid grid-cols-1 gap-2 md:block" : "mt-1 grid grid-cols-2 gap-2 md:block"}>
          <button
            type="button"
            className={variant === "related" ? "min-h-8 rounded-full bg-[#057429] px-2 text-[0.66rem] font-black uppercase tracking-[0.04em] text-white transition hover:bg-[#006020] md:min-h-9 md:w-full md:rounded-lg md:py-2 md:text-xs md:tracking-[0.12em]" : "min-h-9 rounded-full bg-[#057429] px-3 text-[0.68rem] font-black uppercase tracking-[0.08em] text-white transition hover:bg-[#006020] md:w-full md:rounded-lg md:py-2 md:text-xs md:tracking-[0.12em]"}
            onClick={() => addItem(product)}
          >
            Add
          </button>
          <button
            type="button"
            className={variant === "related" ? "hidden" : "min-h-9 rounded-full border border-[#8FAF98] bg-[#FFFFFF] px-3 text-[0.68rem] font-black uppercase tracking-[0.08em] text-[#365B39] md:hidden"}
            onClick={() => wishlist.toggle(product.id)}
          >
            {wishlist.has(product.id) ? "Saved" : "Wish"}
          </button>
        </div>
      </div>
    </article>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="w-max rounded-full bg-[#FFFFFF] px-2 py-1 text-[0.55rem] font-black uppercase tracking-[0.06em] text-[#145615] shadow-sm md:text-[0.62rem] md:tracking-[0.1em]">
      {children}
    </span>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
