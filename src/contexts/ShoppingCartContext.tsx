"use client";

import React, { createContext, useState, useContext } from "react";
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

  const addToCart = (item: OrderLine) => {
    setCart((prevCart) => prevCart.concat(item));
  };

  const removeFromCart = (position: number) => {
    setCart((prevCart) => prevCart.splice(position, 1));
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
