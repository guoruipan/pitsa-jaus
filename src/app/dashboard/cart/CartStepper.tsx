"use client";

import React from "react";
import HorizontalLinearStepper from "#/components/ui/HorizontalLinearStepper";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import StoreSelection from "./StoreSelection";
import ActualCart from "./ActualCart";
import CheckoutScreen from "./CheckoutScreen";
import { Store } from "#/models/store";
import { User } from "#/models/user";

interface Props {
  stores: Store[];
  user: User;
}

export default function CartStepper({ stores, user }: Props) {
  const { store } = useShoppingCart();

  const steps = [
    {
      name: "Selecciona una tienda",
      screen: <StoreSelection stores={stores} />,
    },
    { name: "Llena tu carrito", screen: <ActualCart /> },
    { name: "Completa la compra", screen: <CheckoutScreen user={user} /> },
  ];

  return <HorizontalLinearStepper steps={steps} initialStep={store ? 1 : 0} />;
}
