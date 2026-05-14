"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { useCart } from "@/features/cart/CartProvider";
import { useWishlist } from "@/features/wishlist/WishlistProvider";

export function ProductActions({ product }: { product: Product }) {
  const [selected, setSelected] = useState(product.options[0] ?? "Standard");
  const { addItem } = useCart();
  const wishlist = useWishlist();

  return (
    <div className="mt-7 max-md:mt-5">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.12em] max-md:text-[0.68rem]">
        Select option
      </p>
      <div className="flex flex-wrap gap-2">
        {product.options.map((option) => (
          <button
            key={option}
            className={`min-h-10 min-w-[60px] rounded-lg border px-3 text-xs font-black transition max-md:min-h-9 max-md:min-w-[52px] max-md:px-2 max-md:text-[0.68rem] md:min-h-[46px] md:min-w-[88px] md:px-5 ${
              selected === option
                ? "border-[#037733] bg-[#037733] text-white"
                : "border-[#E4E7E4] bg-white hover:border-[#8FAF98]"
            }`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-2 max-md:mt-4 md:gap-3">
        <button
          className="min-h-11 rounded-full bg-[#057429] px-3 text-[0.72rem] font-black uppercase tracking-[0.1em] text-white shadow-[0_10px_24px_rgba(5,116,41,0.2)] transition hover:-translate-y-0.5 hover:bg-[#006020] md:min-h-[58px] md:rounded-lg md:px-5 md:text-sm md:tracking-[0.16em] md:shadow-[0_16px_34px_rgba(5,116,41,0.24)]"
          onClick={() => addItem(product, selected)}
        >
          Add to Cart
        </button>
        <button
          className="min-h-11 rounded-full border border-[#8FAF98] bg-[#FFFFFF] px-3 text-[0.72rem] font-black uppercase tracking-[0.1em] text-[#365B39] transition hover:border-[#006020] hover:text-[#006020] md:min-h-[58px] md:rounded-lg md:px-5 md:text-sm md:tracking-[0.14em]"
          onClick={() => wishlist.toggle(product.id)}
        >
          {wishlist.has(product.id) ? "Wishlisted" : "Wishlist"}
        </button>
      </div>
    </div>
  );
}
