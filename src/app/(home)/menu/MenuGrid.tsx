import React from "react";
import { list as listPizzas } from "#/models/pizza";
import { getPizzaPhoto } from "#/lib/utils";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

interface GridProps {
  currentPage: number;
}

export default async function MenuGrid({ currentPage }: GridProps) {
  const pizzas = await listPizzas(currentPage);

  return (
    <Grid container spacing={2}>
      {pizzas.map((pizza) => (
        <Grid item key={pizza.id} xs={12} sm={6} md={4} lg={3}>
          <MenuCard
            href={`/menu/${pizza.id}`}
            imgUrl={getPizzaPhoto(pizza)}
            text={`Pizza ${pizza.name}`}
          />
        </Grid>
      ))}
    </Grid>
  );
}

interface CardProps {
  imgUrl: string;
  text: string;
  href?: string;
}

function MenuCard({ imgUrl, text, href }: CardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea href={href || "#"}>
        <CardMedia
          component={"img"}
          sx={{ height: 140 }}
          image={imgUrl}
          alt={`Foto de una pizza ${text}`}
        />
        <CardContent>
          <Typography variant="h6">{text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
