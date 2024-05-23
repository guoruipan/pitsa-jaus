"use client";

import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { PaperStack } from "#/components/containers/PaperStack";
import H1 from "#/components/texts/H1";
import H2 from "#/components/texts/H2";
import { User } from "#/models/user";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { AlertError } from "#/components/ui/Alert";
import Link from "#/components/texts/Link";
import { formatCurrency } from "#/lib/utils";

interface Props {
  user: User;
}

export default function CheckoutScreen({ user }: Props) {
  // TODO validar que
  // usuario tenga home_address
  // haya realmente un carrito con al menos 1 item, y que haya tienda seleccionada
  //

  return (
    <PaperStack spacing={4}>
      <H1>Comprueba tus datos</H1>
      <UserData user={user} />
      <OrderData />
      <CompleteOrderButton />
    </PaperStack>
  );
}

function CompleteOrderButton() {
  return <Button variant="contained">Completar la compra</Button>;
}

function OrderData() {
  const { cart, getCartTotal } = useShoppingCart();

  return (
    <Stack spacing={2}>
      <H2>Datos de la compra</H2>
      {cart.length === 0 ? (
        <AlertError>Aún no hay ningún elemento en el carrito</AlertError>
      ) : (
        <>
          <Typography variant="h6">
            Total: {formatCurrency(getCartTotal())}
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="cart table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((cartItem) => (
                  <TableRow
                    key={cartItem.pizza.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {cartItem.pizza.name}
                    </TableCell>
                    <TableCell align="right">
                      {formatCurrency(cartItem.pizza.price)}
                    </TableCell>
                    <TableCell align="right">{cartItem.quantity}</TableCell>
                    <TableCell align="right">
                      {formatCurrency(cartItem.pizza.price * cartItem.quantity)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Stack>
  );
}

function UserData({ user }: { user: User }) {
  const [address] = React.useState<string | undefined>(user.home_address);

  const data = [
    `Nombre: ${user.name}`,
    `Email: ${user.email}`,
    `Dirección de envío: ${address || "Sin especificar"}`,
  ];

  return (
    <Stack spacing={2}>
      <H2>Tus datos</H2>
      {!address && (
        <AlertError>
          Falta la dirección de domicilio. Cámbiala{" "}
          <Link href="/dashboard/my-account/edit-profile">aquí</Link>
        </AlertError>
      )}
      <List>
        {data.map((dataRow, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              {dataRow}
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
