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
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import { User } from "#/models/user";
import { PaperStack } from "#/components/containers/PaperStack";
import { useSnackBar } from "#/contexts/SnackbarContext";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  pizza: Pizza;
  user: User | undefined;
}

export default function MenuCard({ pizza, user }: Props) {
  const { showSnackbar } = useSnackBar();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { addToCart } = useShoppingCart();

  function handleClick() {
    addToCart({ id: 0, order_id: 0, pizza: pizza, quantity: 1 });
    handleClose();
    showSnackbar(`Se ha añadido 1 ${pizza.name} al carrito`, "success");
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
        <PaperStack
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: {
              xs: "95%",
              sm: "70%",
              md: "50%",
            },
            transform: "translate(-50%, -50%)",
            pt: "1.5rem",
          }}
        >
          <Box display="flex" flexDirection={"row-reverse"}>
            <IconButton
              size="small"
              aria-label="close-modal"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box
            sx={{
              position: "relative",
              height: { xs: "200px", sm: "250px", md: "275px", lg: "300px" },
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
          <Typography variant="h4">{pizza.name}</Typography>
          <Typography variant={"subtitle1"}>{pizza.description}</Typography>
          <Button variant="contained" onClick={handleClick} disabled={!user}>
            Añadir por {formatCurrency(pizza.price)}
          </Button>
        </PaperStack>
      </Modal>
    </>
  );
}
