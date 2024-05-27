"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { Pizza } from "#/models/pizza";
import { Store } from "#/models/store";

// https://dev.to/anne46/cart-functionality-in-react-with-context-api-2k2f

export interface CartItem {
  pizza: Pizza;
  quantity: number;
}

interface ShoppingCartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (position: number, quantity: number) => void;
  getCartTotal: () => number;
  clearCart: () => void;
  store: Store | undefined;
  changeStore: (store: Store | undefined) => void;
}

// https://react.dev/reference/react/createContext
// le pasamos valores por defecto al contexto
const ShoppingCartContext = createContext<ShoppingCartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getCartTotal: () => 0,
  clearCart: () => {},
  store: undefined,
  changeStore: () => {},
});

// https://react.dev/reference/react/useContext
export const useShoppingCart = () => useContext(ShoppingCartContext);

// envolver la aplicación entera con esto para tener acceso al carrito en todas las páginas
export const ShoppingCartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const initialCart = getCartFromLocalStorage();
    setCart(initialCart);
  }, []);

  const addToCart = (item: CartItem) => {
    const itemIndex = cart.findIndex(
      (cartItem) => cartItem.pizza.id === item.pizza.id,
    );

    if (itemIndex !== -1) {
      // ya está el item en el carrito
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity++; // no voy a necesitar aumentar varios de golpe
      setCart(updatedCart);
    } else {
      // no está todavía en en carrito, lo añadimos
      setCart((prevCart) => [...prevCart, item]);
    }

    saveCartToLocalStorage(cart);
  };

  const removeFromCart = (position: number, quantity: number) => {
    const updatedCart = [...cart];

    if (quantity === -1) {
      // quitar el item entero del carrito
      updatedCart.splice(position, 1);
    } else {
      // reducir la cantidad especificada
      const item = updatedCart[position];
      if (item) {
        if (quantity >= item.quantity) {
          updatedCart.splice(position, 1);
        } else {
          item.quantity -= quantity;
        }
      }
    }

    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
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

  const [store, setStore] = useState<Store | undefined>();

  const changeStore = (store: Store | undefined) => {
    setStore(store);
    saveStoreToLocalStorage(store);
  };

  useEffect(() => {
    const initialStore = getStoreFromLocalStorage();
    setStore(initialStore);
  }, []);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    getCartTotal,
    clearCart,
    store,
    changeStore,
  };

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

function saveCartToLocalStorage(cart: CartItem[]) {
  // localStorage solo puede almacenar strings
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getCartFromLocalStorage(): CartItem[] {
  const cartString = localStorage.getItem("cart");
  try {
    return cartString ? JSON.parse(cartString) : [];
  } catch (error) {
    console.error("Error parsing CartItem from local storage:", error);
    return [];
  }
}

function saveStoreToLocalStorage(store: Store | undefined) {
  localStorage.setItem("store", JSON.stringify(store));
}

function getStoreFromLocalStorage(): Store | undefined {
  // JSON.stringify convierte undefined a null
  const storeString = localStorage.getItem("store");
  try {
    return storeString ? JSON.parse(storeString) : undefined;
  } catch (error) {
    console.error("Error parsing Store from local storage:", error);
    return;
  }
}
