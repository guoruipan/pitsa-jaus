"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { OrderLine } from "#/models/order";

interface ShoppingCartContextProps {
  cart: OrderLine[];
  addToCart: (item: OrderLine) => void;
  removeFromCart: (position: number) => void;
  getCartTotal: () => number;
  clearCart: () => void;
}

// https://react.dev/reference/react/createContext
// le pasamos valores por defecto al contexto
const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getCartTotal: () => 0,
  clearCart: () => {},
});

// https://react.dev/reference/react/useContext
export const useShoppingCart = () => useContext(ShoppingCartContext);

// envolver la aplicación entera con esto para tener acceso al carrito en todas las páginas
export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<OrderLine[]>([]);

  useEffect(() => {
    const initialCart = getCartFromLocalStorage();
    setCart(initialCart);
  }, []);

  const addToCart = (item: OrderLine) => {
    setCart((prevCart) => [...prevCart, item]);
    saveCartToLocalStorage(cart);
  };

  const removeFromCart = (position: number) => {
    setCart((prevCart) => prevCart.splice(position, 1));
    saveCartToLocalStorage(cart);
  };

  const getCartTotal = () => {
    // acc (acumulador) está inicializado a 0 (segundo argumento)
    return cart.reduce(
      (acc, item) => acc + item.pizza.price * item.quantity,
      0,
    );
  };

  const clearCart = () => {
    setCart([]);
    saveCartToLocalStorage(cart);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    getCartTotal,
    clearCart,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

function saveCartToLocalStorage(cart: OrderLine[]) {
  // localStorage solo puede almacenar strings
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getCartFromLocalStorage(): OrderLine[] {
  const cartString = localStorage.getItem("cart");
  try {
    return cartString ? JSON.parse(cartString) : [];
  } catch (error) {
    console.error("Error parsing OrderLines from local storage:", error);

    return [];
  }
}
