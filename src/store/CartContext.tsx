import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../types";

const CART_STORAGE_KEY = "stroyka-cart";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartNotice = {
  id: number;
  message: string;
};

type CartContextValue = {
  items: CartItem[];
  cartCount: number;
  subtotal: number;
  notice: CartNotice | null;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  closeNotice: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readCartFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    return readCartFromStorage();
  });
  const [notice, setNotice] = useState<CartNotice | null>(null);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 2600);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const addToCart = useCallback((product: Product, quantity = 1) => {
    const safeQty = Math.max(1, quantity);
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + safeQty }
            : item,
        );
      }
      return [...prev, { product, quantity: safeQty }];
    });
    setNotice({ id: Date.now(), message: `Added ${product.name} to cart` });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const closeNotice = useCallback(() => setNotice(null), []);

  const cartCount = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );
  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.product.price * item.quantity, 0),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      cartCount,
      subtotal,
      notice,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      closeNotice,
    }),
    [
      items,
      cartCount,
      subtotal,
      notice,
      addToCart,
      removeFromCart,
      setQuantity,
      clearCart,
      closeNotice,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
