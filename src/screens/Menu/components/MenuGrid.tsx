import React from 'react';
import { list as listPizzas } from "#/models/pizza";
import MenuCard from "./MenuCard";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

export default async function MenuGrid() {
  const pizzas = await listPizzas();

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
      <Grid item key={"pagination"} xs={12} mt={5}>
        <Pagination count={10} color="secondary" page={3} />
      </Grid>
    </Grid>
  );
}
