"use client";
import { createContext, useContext, useState } from "react";

// 1️⃣ Create context
const CartContext = createContext();

// 2️⃣ Create provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Toggle modal visibility
  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const closeCart = () => setIsCartOpen(false);

  // ✅ Add an item to the cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // open modal automatically
  };

  // ✅ Clear all items
  const clearCart = () => setCartItems([]);

  const value = {
    cartItems,
    addToCart,
    clearCart,
    isCartOpen,
    toggleCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// 3️⃣ Export hook for easy access
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
