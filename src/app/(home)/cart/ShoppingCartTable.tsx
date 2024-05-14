"use client";

import React from "react";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import H1 from "#/components/texts/H1";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { getPizzaPhoto } from "#/lib/utils";
import { PaperGrid } from "#/components/containers/PaperGrid";
import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function ShoppingCartTable() {
  const { cart, removeFromCart } = useShoppingCart();

  return cart.map((item, index) => (
    <PaperGrid key={item.id}>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            position: "relative",
            height: "300px",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <Image
            src={getPizzaPhoto(item.pizza)}
            alt={`Imagen de una pizza ${item.pizza.name}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sx={{ my: "auto" }}>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <H1>{item.pizza.name}</H1>
          <Typography variant={"body1"}>{item.pizza.description}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4} sx={{ my: "auto" }}>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Button onClick={() => removeFromCart(index)}>Quitar</Button>
          </Box>
          <Typography variant={"body1"}>
            {item.pizza.price * item.quantity}
          </Typography>
        </Stack>
      </Grid>
    </PaperGrid>
  ));
}
