"use client";

import React from "react";
import HorizontalLinearStepper from "#/components/ui/HorizontalLinearStepper";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import StoreSelection from "./StoreSelection";
import ActualCart from "./ActualCart";
import CheckoutScreen from "./CheckoutScreen";

const steps = [
  { name: "Selecciona una tienda", screen: <StoreSelection /> },
  { name: "Llena tu carrito", screen: <ActualCart /> },
  { name: "Completa la compra", screen: <CheckoutScreen /> },
];

export default function CartStepper() {
  const { store } = useShoppingCart();

  return <HorizontalLinearStepper steps={steps} initialStep={store ? 1 : 0} />;
}
