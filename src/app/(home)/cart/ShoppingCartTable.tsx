"use client";

import React from "react";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { formatCurrency, getPizzaPhoto } from "#/lib/utils";
import { PaperGrid } from "#/components/containers/PaperGrid";
import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ClearIcon from "@mui/icons-material/Clear";

export default function ShoppingCartTable() {
  const { cart, addToCart, removeFromCart } = useShoppingCart();

  return (
    <Stack spacing={3}>
      {cart.length === 0
        ? "No hay elementos"
        : cart.map((item, index) => (
            <PaperGrid key={item.id}>
              <Grid
                item
                xs={12}
                md={3}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  src={getPizzaPhoto(item.pizza)}
                  alt={`Imagen de una pizza ${item.pizza.name}`}
                  width={100}
                  height={100}
                  priority
                  style={{ margin: "auto", borderRadius: "1rem" }}
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ my: "auto" }}>
                <Stack
                  spacing={2}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant={"h6"}>{item.pizza.name}</Typography>
                  <Typography variant={"body1"}>
                    {formatCurrency(item.pizza.price * item.quantity)}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3} sx={{ my: "auto" }}>
                <Stack
                  spacing={0}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box display={"flex"}>
                    <Button onClick={() => removeFromCart(index, 1)}>
                      <RemoveCircleOutlineIcon />
                    </Button>
                    <Typography>{item.quantity}</Typography>
                    <Button onClick={() => addToCart(item)}>
                      <AddCircleOutlineIcon />
                    </Button>
                  </Box>
                  <Button onClick={() => removeFromCart(index, -1)}>
                    <ClearIcon /> Quitar
                  </Button>
                </Stack>
              </Grid>
            </PaperGrid>
          ))}
    </Stack>
  );
}
