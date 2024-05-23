import React from "react";
import { Grid } from "@mui/material";
import ShoppingCartList from "./ShoppingCartList";
import ActualCartActions from "./ActualCartActions";

export default function ActualCart() {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={8}>
        <ShoppingCartList />
      </Grid>
      <Grid item xs={12} md={4}>
        <ActualCartActions />
      </Grid>
    </Grid>
  );
}
