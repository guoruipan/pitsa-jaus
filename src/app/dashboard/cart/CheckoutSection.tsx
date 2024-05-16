"use client";

import { PaperStack } from "#/components/containers/PaperStack";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import { formatCurrency } from "#/lib/utils";
import { Button, Typography } from "@mui/material";
import React from "react";

export default function CheckoutSection() {
  const { cart, getCartTotal } = useShoppingCart();

  return (
    <PaperStack>
      <Typography variant="h6">Total</Typography>
      <Typography>{formatCurrency(getCartTotal())}</Typography>
      <Button
        href="/dashboard/cart/checkout"
        variant="contained"
        disabled={cart.length === 0}
      >
        Continuar
      </Button>
    </PaperStack>
  );
}
