"use client";

import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import NextLink from "next/link";

export default function ShoppingCart() {
  const { cart } = useShoppingCart();

  return (
    <Badge
      badgeContent={cart.length}
      color="secondary"
      sx={{ mr: 2, color: "inherit" }}
      component={NextLink}
      href={"/dashboard/cart"}
    >
      <ShoppingCartIcon />
    </Badge>
  );
}
