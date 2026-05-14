"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { categories, filterProducts } from "@/lib/catalog";
import { useCart } from "@/features/cart/CartProvider";
import { useWishlist } from "@/features/wishlist/WishlistProvider";
import type { Product } from "@/types/product";

const mainLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/shop", label: "Shop", icon: "shop" },
  { href: "/wishlist", label: "Wishlist", icon: "heart" },
  { href: "/cart", label: "Cart", icon: "cart" },
  { href: "/login", label: "Account", icon: "user" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const { items } = useCart();
  const { ids } = useWishlist();
  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );
  const suggestions = useMemo(() => {
    const term = search.trim();
    return term ? filterProducts({ search: term }).slice(0, 6) : [];
  }, [search]);

  const submitSearch = () => {
    const term = search.trim();
    if (!term) return;
    setOpen(false);
    setSearchOpen(false);
    router.push(`/shop?search=${encodeURIComponent(term)}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE6DD] bg-[#FDFDFD]/95 backdrop-blur">
      <div className="container-page flex min-h-[82px] items-center justify-between gap-5 max-md:min-h-[64px] max-md:gap-2 max-md:px-4">
        <div className="flex min-w-0 items-center gap-4 max-md:gap-2">
          <button
            type="button"
            className="grid h-10 w-10 flex-none place-items-center rounded-lg border border-[#E4E7E4] bg-[#FFFFFF] md:hidden max-md:h-8 max-md:w-8"
            onClick={() => {
              setSearchOpen(false);
              setOpen((value) => !value);
            }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3 max-md:gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-11 w-11 flex-none place-items-center rounded-lg bg-[#145615] text-white max-md:h-9 max-md:w-9">
              <Icon name="paw" className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block whitespace-nowrap text-lg font-black uppercase leading-none tracking-[0.12em] max-md:text-[0.82rem] max-md:tracking-[0.08em]">
                Blits Pets
              </span>
              <span className="mt-1 hidden text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#4F4F4F] sm:block">
                Food, cages, medicine
              </span>
            </span>
          </Link>
        </div>

        <nav className="hidden flex-1 justify-center gap-1 text-xs font-black uppercase tracking-[0.08em] text-[#1D1D1D] lg:flex">
          {mainLinks.slice(0, 2).map((link) => (
            <NavLink key={link.href} {...link} active={pathname === link.href} />
          ))}
          {categories.slice(0, 4).map((category) => (
            <Link
              key={category.name}
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              className="rounded-lg px-3 py-2 transition hover:bg-[#F3F6F4] hover:text-[#0B3221]"
            >
              {category.name}
            </Link>
          ))}
        </nav>

        <SearchBox
          search={search}
          setSearch={setSearch}
          suggestions={suggestions}
          submitSearch={submitSearch}
          onClose={() => {
            setOpen(false);
            setSearchOpen(false);
          }}
          limit={6}
          className="hidden lg:block"
        />

        <div className="flex flex-none items-center gap-2 max-md:gap-1.5">
          <button
            type="button"
            className={`relative hidden h-10 w-10 place-items-center rounded-lg border transition max-lg:grid max-md:h-8 max-md:w-8 ${
              searchOpen
                ? "border-[#037733] bg-[#EEF5EE] text-[#037733]"
                : "border-[#E4E7E4] bg-[#FFFFFF] text-[#365B39] hover:border-[#8FAF98] hover:text-[#145615]"
            }`}
            onClick={() => {
              setOpen(false);
              setSearchOpen((value) => !value);
            }}
            aria-label={searchOpen ? "Close search" : "Open search"}
            aria-expanded={searchOpen}
          >
            <Icon name={searchOpen ? "close" : "search"} className="h-5 w-5 max-md:h-4 max-md:w-4" />
          </button>
          <HeaderIconLink
            href="/wishlist"
            label="Wishlist"
            icon="heart"
            count={ids.length}
            active={pathname === "/wishlist"}
          />
          <HeaderIconLink
            href="/cart"
            label="Cart"
            icon="cart"
            count={cartCount}
            active={pathname === "/cart"}
          />
          <HeaderIconLink
            href="/login"
            label="Account"
            icon="user"
            active={pathname === "/login" || pathname === "/signup"}
          />
        </div>
      </div>

      {searchOpen ? (
        <div className="border-t border-[#DDE6DD] bg-[#FFFFFF] px-5 py-4 shadow-md lg:hidden">
          <SearchBox
            search={search}
            setSearch={setSearch}
            suggestions={suggestions}
            submitSearch={submitSearch}
            onClose={() => {
              setOpen(false);
              setSearchOpen(false);
            }}
            limit={3}
            mobile
          />
        </div>
      ) : null}

      <div className="border-t border-[#DDE6DD] bg-[#FFFFFF] max-lg:hidden">
        <div className="container-page flex items-center gap-2 overflow-x-auto py-2 text-xs font-bold text-[#4F4F4F]">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              className="flex shrink-0 items-center gap-2 rounded-lg border border-[#E4E7E4] px-3 py-2 transition hover:border-[#8FAF98] hover:text-[#145615]"
            >
              <Icon name={category.icon} className="h-4 w-4" />
              {category.name}
            </Link>
          ))}
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#DDE6DD] bg-[#FFFFFF] px-5 py-5 shadow-md lg:hidden">
          <nav className="grid gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#1D1D1D]">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg border border-[#E4E7E4] px-4 py-3"
              >
                <Icon name={link.icon} className="h-5 w-5 text-[#438342]" />
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/shop?category=${encodeURIComponent(category.name)}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-lg bg-[#F8F8F8] px-3 py-3 text-xs"
                >
                  <Icon name={category.icon} className="h-4 w-4 text-[#438342]" />
                  {category.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-lg px-3 py-2 transition ${
        active ? "bg-[#EEF5EE] text-[#037733]" : "hover:bg-[#F3F6F4] hover:text-[#0B3221]"
      }`}
    >
      <Icon name={icon} className="h-4 w-4" />
      {label}
    </Link>
  );
}

function SearchBox({
  search,
  setSearch,
  suggestions,
  submitSearch,
  onClose,
  limit,
  mobile = false,
  className = "",
}: {
  search: string;
  setSearch: (value: string) => void;
  suggestions: Product[];
  submitSearch: () => void;
  onClose: () => void;
  limit: number;
  mobile?: boolean;
  className?: string;
}) {
  const visibleSuggestions = suggestions.slice(0, limit);
  const hasSearch = search.trim().length > 0;

  return (
    <div className={`relative ${className}`}>
      <form
        className={`flex h-11 items-center gap-2 rounded-lg border border-[#DADFDA] bg-[#F8F8F8] px-3 ${
          mobile ? "w-full" : "w-[300px]"
        }`}
        onSubmit={(event) => {
          event.preventDefault();
          submitSearch();
        }}
      >
        <Icon name="search" className="h-5 w-5 text-[#438342]" />
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-neutral-400"
          placeholder="Search food, leash, cage..."
          aria-label={mobile ? "Search pet supplies mobile" : "Search pet supplies"}
          autoFocus={mobile}
        />
        <button
          type="submit"
          className="rounded-full bg-[#057429] px-3 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#006020]"
        >
          Go
        </button>
      </form>

      {hasSearch ? (
        <div
          className={`z-50 mt-2 overflow-hidden rounded-lg border border-[#E6EAE6] bg-white shadow-[0_18px_45px_#E8ECE8] ${
            mobile ? "w-full" : "absolute right-0 w-[380px]"
          }`}
        >
          <div className="border-b border-[#E6EAE6] px-4 py-3 text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#145615]">
            Suggestions
          </div>
          {visibleSuggestions.length ? (
            <div className="grid">
              {visibleSuggestions.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClose}
                  className="grid grid-cols-[46px_1fr] gap-3 border-b border-[#E6EAE6] px-3 py-2.5 text-left transition last:border-b-0 hover:bg-[#F3F6F4]"
                >
                  <span className="relative h-11 w-11 overflow-hidden rounded-md bg-[#FDFEFD]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-black text-[#1F1F1F]">
                      {product.name}
                    </span>
                    <span className="mt-0.5 block truncate text-xs font-semibold text-[#4F4F4F]">
                      {product.brand} - {product.category}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-5 text-sm font-semibold text-[#4F4F4F]">
              No direct matches. Search the shop instead.
            </div>
          )}
          <button
            type="button"
            className="flex w-full items-center justify-between bg-[#EEF5EE] px-4 py-3 text-left text-sm font-black text-[#037733] transition hover:bg-[#F3F6F4]"
            onClick={submitSearch}
          >
            <span className="truncate">Search for &quot;{search.trim()}&quot;</span>
            <span className="text-xs uppercase tracking-[0.12em]">Enter</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

function HeaderIconLink({
  href,
  label,
  icon,
  count,
  active,
}: {
  href: string;
  label: string;
  icon: string;
  count?: number;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`relative grid h-10 w-10 place-items-center rounded-lg border transition ${
        active
          ? "border-[#037733] bg-[#EEF5EE] text-[#037733]"
          : "border-[#E4E7E4] bg-[#FFFFFF] text-[#365B39] hover:border-[#8FAF98] hover:text-[#145615]"
      } max-md:h-8 max-md:w-8`}
      aria-label={label}
      title={label}
    >
      <Icon name={icon} className="h-5 w-5 max-md:h-4 max-md:w-4" />
      {count ? (
        <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#057429] px-1 text-[0.62rem] font-black text-white">
          {count}
        </span>
      ) : null}
    </Link>
  );
}

function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {name === "paw" ? (
        <>
          <circle cx="7.5" cy="8" r="2.2" fill="currentColor" />
          <circle cx="12" cy="6.4" r="2.2" fill="currentColor" />
          <circle cx="16.5" cy="8" r="2.2" fill="currentColor" />
          <path d="M7 17.2c0-3 2.2-5.2 5-5.2s5 2.2 5 5.2c0 1.7-1.1 2.8-2.5 2.8-.9 0-1.5-.4-2.5-.4s-1.6.4-2.5.4C8.1 20 7 18.9 7 17.2Z" fill="currentColor" />
        </>
      ) : null}
      {name === "home" ? <path {...common} d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9Z" /> : null}
      {name === "shop" ? <path {...common} d="M4 10h16l-1 11H5L4 10Zm2-7h12l2 7H4l2-7Z" /> : null}
      {name === "heart" ? <path {...common} d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.3a5 5 0 0 0 0-7.1Z" /> : null}
      {name === "cart" ? <path {...common} d="M4 4h2l2 11h9.5L20 8H7M9 20h.01M18 20h.01" /> : null}
      {name === "user" ? <path {...common} d="M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" /> : null}
      {name === "search" ? <path {...common} d="m21 21-4.3-4.3M10.8 18a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Z" /> : null}
      {name === "menu" ? <path {...common} d="M4 7h16M4 12h16M4 17h16" /> : null}
      {name === "close" ? <path {...common} d="m6 6 12 12M18 6 6 18" /> : null}
      {name === "bone" ? <path {...common} d="M7 8a3 3 0 1 1 3-3h4a3 3 0 1 1 3 3v8a3 3 0 1 1-3 3h-4a3 3 0 1 1-3-3V8Z" /> : null}
      {name === "bird" ? <path {...common} d="M5 19c5 0 12-4 12-12l4-1-4-1c-4 0-8 3-8 8H5c-2 0-3 1-3 3s1 3 3 3Z" /> : null}
      {name === "spark" ? <path {...common} d="m12 3 2.2 6.2L20 12l-5.8 2.8L12 21l-2.2-6.2L4 12l5.8-2.8L12 3Z" /> : null}
      {name === "plus" ? <path {...common} d="M12 5v14M5 12h14" /> : null}
      {name === "leash" ? <path {...common} d="M5 5c4 0 5 3 5 7v6a3 3 0 0 0 6 0v-4M16 8h4v6h-4z" /> : null}
    </svg>
  );
}
