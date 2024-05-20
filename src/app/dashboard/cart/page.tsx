import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import { Grid } from "@mui/material";

import ShoppingCartList from "./ShoppingCartList";
import CheckoutSection from "./CheckoutSection";
import ReturnLink from "#/components/texts/ReturnLink";

const pageTitle = "Carrito";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  const user = await getSessionUser();
  if (!user) throw new Error("No hay usuario logueado");

  if (user.role !== "customer")
    throw new Error(
      "Tienes que iniciar sesión como cliente para ver esta página",
    );

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
