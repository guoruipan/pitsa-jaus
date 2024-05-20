import React from "react";
import { list as listPizzas } from "#/models/pizza";
import Grid from "@mui/material/Grid";
import MenuCard from "./MenuCard";
import { getSessionUser } from "#/lib/session";

interface GridProps {
  currentPage: number;
}

export default async function MenuGrid({ currentPage }: GridProps) {
  const pizzas = await listPizzas("", currentPage);
  const user = await getSessionUser();

  return (
    <Grid container spacing={1}>
      {pizzas.map((pizza) => (
        <Grid item key={pizza.id} xs={12} sm={6} md={4} lg={3}>
          <MenuCard pizza={pizza} user={user} />
        </Grid>
      ))}
    </Grid>
  );
}
