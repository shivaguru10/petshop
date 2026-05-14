"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "@/types/product";

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, variant?: string) => void;
  removeItem: (id: string, variant: string) => void;
  updateQuantity: (id: string, variant: string, quantity: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = "blits-pets-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [hydrated, items]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem(product, variant = product.options[0] ?? "Standard") {
        setItems((current) => {
          const match = current.find(
            (item) => item.id === product.id && item.variant === variant,
          );
          if (match) {
            return current.map((item) =>
              item.id === product.id && item.variant === variant
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }
          return [...current, { ...product, quantity: 1, variant }];
        });
      },
      removeItem(id, variant) {
        setItems((current) =>
          current.filter((item) => item.id !== id || item.variant !== variant),
        );
      },
      updateQuantity(id, variant, quantity) {
        if (quantity < 1) return;
        setItems((current) =>
          current.map((item) =>
            item.id === id && item.variant === variant
              ? { ...item, quantity }
              : item,
          ),
        );
      },
      clear() {
        setItems([]);
      },
    }),
    [items],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used inside CartProvider");
  return value;
}
