"use client";

import Image from "next/image";
import Link from "next/link";
import { BackButton } from "@/components/common/BackButton";
import { getDiscountedPrice } from "@/lib/catalog";
import { useCart } from "./CartProvider";

export function CartPage() {
  const { items, updateQuantity, removeItem, clear } = useCart();
  const total = items.reduce(
    (sum, item) => sum + getDiscountedPrice(item) * item.quantity,
    0,
  );

  if (!items.length) {
    return (
      <div className="container-page grid min-h-[60vh] place-items-center py-16 text-center">
        <div>
          <BackButton fallback="/shop" />
          <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-[#EEF5EE] text-[#0B3221]">
            <svg viewBox="0 0 180 150" className="h-20 w-20" aria-hidden="true">
              <path
                d="M38 106h94c11 0 20-9 20-20V43H56l-5-18H28"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              />
              <path
                d="M65 62h61"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="7"
                opacity=".3"
              />
              <circle cx="67" cy="124" r="10" fill="currentColor" />
              <circle cx="128" cy="124" r="10" fill="currentColor" />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-black">Your Bag is Empty</h1>
          <p className="mt-2 text-[#4F4F4F]">
            Add pet food, medicine, cages, or accessories to get started.
          </p>
          <Link href="/shop" className="brand-button mt-7 inline-block">
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-[1200px] items-start gap-[50px] px-[60px] py-[60px] lg:grid-cols-[1fr_380px] max-lg:grid-cols-1 max-lg:px-10 max-md:px-5 max-md:py-8">
      <section>
        <BackButton fallback="/shop" />
        <div className="mb-6 flex items-baseline justify-between border-b border-[#DDE6DD] pb-5">
          <h1 className="text-3xl font-black uppercase tracking-[0.06em]">
            Shopping Cart
          </h1>
          <span className="font-semibold text-[#4F4F4F]">
            {items.length} Items
          </span>
        </div>
        <div>
          {items.map((item) => (
            <article
              key={`${item.id}-${item.variant}`}
              className="grid grid-cols-[140px_1fr_150px] gap-[30px] border-b border-[#DDE6DD] py-[30px] transition hover:bg-[#F3F6F4] max-md:grid-cols-[100px_1fr] max-md:grid-rows-[auto_auto] max-md:gap-5"
            >
              <div className="relative h-[180px] w-[140px] overflow-hidden bg-[#FDFEFD] max-md:h-[130px] max-md:w-[100px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100px, 140px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between max-md:contents">
                <div className="max-md:col-start-2">
                  <h2 className="mb-1.5 text-base font-bold uppercase tracking-[0.1em]">
                    {item.brand}
                  </h2>
                  <p className="mb-4 text-xl text-[#4F4F4F]">{item.name}</p>
                  <p className="text-sm font-medium text-[#4F4F4F]">
                    Option: <span className="text-[#0B3221]">{item.variant}</span>
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-[30px] max-md:col-span-2 max-md:col-start-1 max-md:justify-between max-md:pt-2">
                  <div className="flex items-center rounded border border-[#DADFDA] p-1">
                    <button
                      className="grid h-7 w-7 place-items-center text-[#365B39] transition hover:bg-[#EEF5EE] hover:text-[#0B3221]"
                      onClick={() =>
                        updateQuantity(item.id, item.variant, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <strong className="min-w-8 text-center text-sm">{item.quantity}</strong>
                    <button
                      className="grid h-7 w-7 place-items-center text-[#365B39] transition hover:bg-[#EEF5EE] hover:text-[#0B3221]"
                      onClick={() =>
                        updateQuantity(item.id, item.variant, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="border-l border-[#DADFDA] pl-[30px] text-xs font-black uppercase tracking-[0.1em] text-[#4F4F4F] transition hover:text-[#006020] max-md:border-0 max-md:p-0"
                    onClick={() => removeItem(item.id, item.variant)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <strong className="text-right text-xl max-md:col-start-2 max-md:-mt-3 max-md:text-left">
                Rs. {(getDiscountedPrice(item) * item.quantity).toLocaleString("en-IN")}
              </strong>
            </article>
          ))}
        </div>
      </section>

      <aside className="sticky top-[130px] bg-[#F8F8F8] p-10 max-lg:static">
        <h2 className="text-sm font-black uppercase tracking-[0.14em]">
          Order Summary
        </h2>
        <div className="mt-5 border-t border-[#DADFDA] pt-6">
          <div className="grid gap-4 text-sm">
          <div className="flex justify-between">
            <span>Price ({items.length} items)</span>
            <span>Rs. {total.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-[#057429]">FREE</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-black">
              <span>Total Amount</span>
              <span>Rs. {total.toLocaleString("en-IN")}</span>
            </div>
          </div>
          </div>
        </div>
        <button className="mt-9 w-full bg-[#0A5D0A] px-5 py-5 text-sm font-black uppercase tracking-[0.15em] text-white transition hover:bg-[#006020]" onClick={clear}>
          Place Order
        </button>
        <div className="mt-5 flex items-center justify-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.05em] text-[#4F4F4F]">
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span>100% Secure Payments</span>
        </div>
      </aside>
    </div>
  );
}
