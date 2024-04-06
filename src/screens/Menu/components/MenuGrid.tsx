import React from "react";
import { list as listPizzas } from "#/models/pizza";
import MenuCard from "./MenuCard";
import Grid from "@mui/material/Grid";

interface Props {
  currentPage : number;
}

export default async function MenuGrid({currentPage} : Props) {
  const pizzas = await listPizzas(currentPage);

  return (
    <Grid container spacing={2}>
      {pizzas.map((pizza) => (
        <Grid item key={pizza.id} xs={12} sm={6} md={4} lg={3}>
          <MenuCard
            href={`/menu/${pizza.id}`}
            imgUrl="/placeholder.jpg"
            text={`Pizza ${pizza.name}`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
