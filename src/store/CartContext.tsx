import { createContext, useContext, ReactNode } from "react";
import type { Product } from "../types";

type CartContextValue = {
  items: any[];
  cartCount: number;
  subtotal: number;
  notice: any;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  closeNotice: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  // Все функции-заглушки — ничего не делают
  const addToCart = () => {};
  const removeFromCart = () => {};
  const setQuantity = () => {};
  const clearCart = () => {};
  const closeNotice = () => {};

  const value = {
    items: [],
    cartCount: 0,
    subtotal: 0,
    notice: null,
    addToCart,
    removeFromCart,
    setQuantity,
    clearCart,
    closeNotice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}