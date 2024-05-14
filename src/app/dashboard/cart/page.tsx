import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import { Grid } from "@mui/material";
import Link from "#/components/texts/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartTable from "./ShoppingCartTable";
import CheckoutSection from "./CheckoutSection";

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
        <Link href="/menu" underline="hover">
          <ArrowBackIcon /> Seguir comprando
        </Link>
      </Grid>
      <Grid item xs={12} md={9}>
        <ShoppingCartTable />
      </Grid>
      <Grid item xs={12} md={3}>
        <CheckoutSection />
      </Grid>
    </Grid>
  );
}
