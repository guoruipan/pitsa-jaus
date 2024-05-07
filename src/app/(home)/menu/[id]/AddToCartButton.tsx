"use client";

import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import { redirectTo } from "#/lib/navigation";
import { Pizza } from "#/models/pizza";
import { Button } from "@mui/material";
import React from "react";

interface Props {
  pizza: Pizza;
}

export default function AddToCartButton({ pizza }: Props) {
  const { addToCart } = useShoppingCart();
  function handleClick() {
    addToCart({ id: 0, order_id: 0, pizza: pizza, quantity: 1 });
    redirectTo("/menu");
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      Añadir
    </Button>
  );
}
