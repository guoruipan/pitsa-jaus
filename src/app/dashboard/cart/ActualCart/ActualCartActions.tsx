"use client";

import { PaperStack } from "#/components/containers/PaperStack";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import { formatCurrency } from "#/lib/utils";
import { Button, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";

export default function CheckoutSection() {
  const { cart, getCartTotal, clearCart } = useShoppingCart();

  return (
    <PaperStack>
      <Typography variant="h6">Total</Typography>
      <Typography>{formatCurrency(getCartTotal())} (IVA incluido)</Typography>
      <Button variant="contained" href="/menu" component={NextLink}>
        Seguir comprando
      </Button>
      <Button
        variant="outlined"
        disabled={cart.length === 0}
        onClick={clearCart}
      >
        Vaciar carrito
      </Button>
    </PaperStack>
  );
}
