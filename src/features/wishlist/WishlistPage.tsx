"use client";

import Link from "next/link";
import { BackButton } from "@/components/common/BackButton";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/lib/catalog";
import { useWishlist } from "./WishlistProvider";

export function WishlistPage() {
  const { ids } = useWishlist();
  const savedProducts = products.filter((product) => ids.includes(product.id));

  if (!savedProducts.length) {
    return (
      <div className="container-page grid min-h-[60vh] place-items-center py-16 text-center">
        <div>
          <BackButton fallback="/shop" />
          <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#EEF5EE] text-[#438342]">
            <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden="true">
              <path
                d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1Z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-black">Your Wishlist is Empty</h1>
          <p className="mt-2 text-[#4F4F4F]">
            Save pet food, cages, medicine, and accessories you want to revisit.
          </p>
          <Link href="/shop" className="brand-button mt-7 inline-block rounded-lg">
            Explore Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-12">
      <BackButton fallback="/shop" />
      <div className="mb-8 flex items-baseline justify-between border-b border-[#DDE6DD] pb-5">
        <h1 className="text-3xl font-black uppercase tracking-[0.06em]">
          Your Wishlist
        </h1>
        <span className="font-semibold text-[#4F4F4F]">
          {savedProducts.length} Items
        </span>
      </div>
      <ProductGrid products={savedProducts} />
    </div>
  );
}
