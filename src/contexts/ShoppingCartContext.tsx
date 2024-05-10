"use client";

import React, { createContext, useState, useEffect, useContext } from "react";
import { OrderLine } from "#/models/order";
import {
  getSessionCart,
  clearSessionCart,
  addToSessionCart,
  removeFromSessionCart,
} from "#/lib/cart";

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
    const fetchCart = async () => {
      const fetchedCart = await getSessionCart(); // Call the server action
      setCart(fetchedCart || []); // Set cart state with fetched data (or empty array)
    };

    fetchCart();
  }, []);

  const addToCart = (item: OrderLine) => {
    setCart((prevCart) => [...prevCart, item]);
    addToSessionCart(item);
  };

  const removeFromCart = (position: number) => {
    setCart((prevCart) => prevCart.splice(position, 1));
    removeFromSessionCart(position);
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
    clearSessionCart();
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
