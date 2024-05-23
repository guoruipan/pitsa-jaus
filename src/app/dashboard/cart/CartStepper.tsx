"use client";

import React from "react";
import HorizontalLinearStepper from "#/components/ui/HorizontalLinearStepper";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import StoreSelection from "./StoreSelection";
import ActualCart from "./ActualCart";
import CheckoutScreen from "./CheckoutScreen";

const steps = [
  "Selecciona una tienda",
  "Llena tu carrito",
  "Completa la compra",
];

const screens = [
  <StoreSelection key={0} />,
  <ActualCart key={1} />,
  <CheckoutScreen key={2} />,
];

export default function CartStepper() {
  const { store } = useShoppingCart();
  const [activeStep, setActiveStep] = React.useState(store ? 1 : 0);

  return (
    <HorizontalLinearStepper
      steps={steps}
      screens={screens}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
    />
  );
}
