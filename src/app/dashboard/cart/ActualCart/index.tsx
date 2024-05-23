import React from "react";
import { Grid } from "@mui/material";
import ReturnLink from "#/components/texts/ReturnLink";
import ShoppingCartList from "./ShoppingCartList";
import CheckoutSection from "./CheckoutSection";

export default function ActualCart() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <ReturnLink href="/menu">Seguir comprando</ReturnLink>
      </Grid>
      <Grid item xs={12} md={9}>
        <ShoppingCartList />
      </Grid>
      <Grid item xs={12} md={3}>
        <CheckoutSection />
      </Grid>
    </Grid>
  );
}
