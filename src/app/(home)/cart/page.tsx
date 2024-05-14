import React from "react";
import { Metadata } from "next";
import { Grid } from "@mui/material";
import ShoppingCartTable from "./ShoppingCartTable";
import CheckoutSection from "./CheckoutSection";
import Link from "#/components/texts/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const pageTitle = "Carrito";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
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
