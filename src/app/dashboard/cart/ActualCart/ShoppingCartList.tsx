"use client";

import React from "react";
import { CartItem, useShoppingCart } from "#/contexts/ShoppingCartContext";
import Image from "next/image";
import { formatCurrency, getPizzaPhoto } from "#/lib/utils";
import { Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ClearIcon from "@mui/icons-material/Clear";
import { PaperStack } from "#/components/containers/PaperStack";
import H2 from "#/components/texts/H2";
import { useSnackbar } from "#/contexts/SnackbarContext";

export default function ShoppingCartList() {
  const { cart } = useShoppingCart();

  return cart.length === 0 ? <NoItemsYet /> : <CartList cart={cart} />;
}

function CartList({ cart }: { cart: CartItem[] }) {
  const { addToCart, removeFromCart } = useShoppingCart();
  const { showSnackbar } = useSnackbar();

  return (
    <Stack spacing={3}>
      {cart.map((item, index) => (
        <PaperStack
          direction={{ xs: "column", sm: "row" }}
          alignItems={"center"}
          key={item.pizza.id}
          spacing={{ xs: 3, sm: "auto" }}
        >
          <Image
            src={getPizzaPhoto(item.pizza)}
            alt={`Imagen de una pizza ${item.pizza.name}`}
            width={100}
            height={100}
            priority
            style={{ borderRadius: "1rem" }}
          />

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
            <Button
              onClick={() => {
                removeFromCart(index, -1);
                showSnackbar(
                  `Has quitado la pizza ${item.pizza.name} del carrito`,
                  "warning",
                );
              }}
            >
              <ClearIcon /> Quitar
            </Button>
          </Stack>
        </PaperStack>
      ))}
    </Stack>
  );
}

function NoItemsYet() {
  return (
    <PaperStack>
      <H2>No hay elementos todavía</H2>
      <Typography>Cuando añadas algo al carrito, aparecerá aquí.</Typography>
    </PaperStack>
  );
}
