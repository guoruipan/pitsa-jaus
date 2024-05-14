"use client";

import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { formatCurrency, getPizzaPhoto } from "#/lib/utils";
import { Pizza } from "#/models/pizza";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import { Button, Grid, Stack } from "@mui/material";
import { PaperGrid } from "#/components/containers/PaperGrid";
import Image from "next/image";
import H1 from "#/components/texts/H1";
import { User } from "#/models/user";

interface Props {
  pizza: Pizza;
  user: User | undefined;
}

export default function MenuCard({ pizza, user }: Props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { addToCart } = useShoppingCart();

  function handleClick() {
    addToCart({ id: 0, order_id: 0, pizza: pizza, quantity: 1 });
    handleClose();
  }

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component={"img"}
            sx={{ height: 140 }}
            image={getPizzaPhoto(pizza)}
            alt={`Foto de una pizza ${pizza.name}`}
          />
          <CardContent>
            <Typography variant="h6">{`Pizza ${pizza.name}`}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PaperGrid
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: {
              xs: "100%",
              sm: "75%",
            },
            transform: "translate(-50%, -50%)",
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                height: "400px",
                borderRadius: "1rem",
                overflow: "hidden",
              }}
            >
              <Image
                src={getPizzaPhoto(pizza)}
                alt={`Imagen de una pizza ${pizza.name}`}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
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
              <H1>{pizza.name}</H1>
              <Typography variant={"body1"}>{pizza.description}</Typography>
              <Typography variant={"body1"}>{pizza.price}</Typography>
              {/* format currency */}
              <Button
                variant="contained"
                onClick={handleClick}
                disabled={!user}
              >
                Añadir
              </Button>
            </Stack>
          </Grid>
        </PaperGrid>
      </Modal>
    </>
  );
}
