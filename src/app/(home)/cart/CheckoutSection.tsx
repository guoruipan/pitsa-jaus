"use client";
import { PaperStack } from "#/components/containers/PaperStack";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import { formatCurrency } from "#/lib/utils";
import { Button, Typography } from "@mui/material";
import React from "react";

export default function CheckoutSection() {
  const { getCartTotal } = useShoppingCart();

  return (
    <PaperStack>
      <Typography>{formatCurrency(getCartTotal())}</Typography>
      <Button>Completar la compra</Button>
    </PaperStack>
  );
}
