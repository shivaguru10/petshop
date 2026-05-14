import type { ReactNode } from "react";
import { CartProvider } from "@/features/cart/CartProvider";
import { WishlistProvider } from "@/features/wishlist/WishlistProvider";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function StorefrontShell({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <SiteHeader />
        <main className="min-h-screen flex-1">{children}</main>
        <SiteFooter />
      </WishlistProvider>
    </CartProvider>
  );
}
