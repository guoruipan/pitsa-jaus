import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import { Box, Grid, Typography } from "@mui/material";
import NextLink from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartList from "./ShoppingCartList";
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
        <Box
          display={"flex"}
          component={NextLink}
          href={"/menu"}
          sx={{ color: "primary.main", textDecoration: "none" }}
        >
          <ArrowBackIcon sx={{ mr: 1, display: "flex" }} />
          <Typography variant="body1" noWrap sx={{ fontWeight: 700 }}>
            Seguir comprando
          </Typography>
        </Box>
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
