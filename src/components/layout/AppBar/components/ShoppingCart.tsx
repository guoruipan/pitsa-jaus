"use client";

import React from "react";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PaperStack } from "#/components/containers/PaperStack";

export default function ShoppingCart() {
  const { cart } = useShoppingCart();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Badge
        badgeContent={cart.length}
        color="secondary"
        sx={{ mr: 2 }}
        onClick={handleOpen}
      >
        <ShoppingCartIcon />
      </Badge>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PaperStack
          spacing={2}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 275, sm: 400 },
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Carrito
          </Typography>
          <Typography id="modal-modal-description">
            Aquí aparecerán los elementos que hayas añadido
          </Typography>
          {cart.map((orderline) => {
            return <p key={orderline.id}>{orderline.pizza.name}</p>;
          })}
        </PaperStack>
      </Modal>
    </div>
  );
}
