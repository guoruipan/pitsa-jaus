import React from "react";
import { Metadata } from "next";
import { Grid, Stack } from "@mui/material";
import H1 from "#/components/texts/H1";
import ShoppingCartTable from "./ShoppingCartTable";
import CheckoutSection from "./CheckoutSection";

const pageTitle = "Carrito";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <ShoppingCartTable />
        </Grid>
        <Grid item xs={12} md={4}>
          <CheckoutSection />
        </Grid>
      </Grid>
    </Stack>
  );
}
