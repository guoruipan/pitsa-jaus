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
import { Order } from "#/models/order";
import { useSnackBar } from "#/contexts/SnackbarContext";
import { insertOrder, insertOrderLine } from "#/models/order";
import { redirectTo } from "#/lib/navigation";

interface Props {
  user: User;
}

export default function CheckoutScreen({ user }: Props) {
  // TODO validar que
  // usuario tenga home_address
  // haya realmente un carrito con al menos 1 item,
  // que haya tienda seleccionada

  // TODO modificar Orders table para que tenga la dirección de envío tb

  return (
    <PaperStack spacing={4}>
      <H1>Comprueba tus datos</H1>
      <UserData user={user} />
      <OrderData />
      <CompleteOrderButton user={user} />
    </PaperStack>
  );
}

function CompleteOrderButton({ user }: { user: User }) {
  const { cart, getCartTotal, store, clearCart, changeStore } =
    useShoppingCart();
  const { showSnackbar } = useSnackBar();

  const handleClick = async () => {
    if (!store) {
      showSnackbar("Aún no has seleccionado una tienda", "error");
      return;
    }
    if (cart.length === 0) {
      showSnackbar("Aún no hay nada en el carrito", "error");
      return;
    }
    if (!user.home_address) {
      showSnackbar("No hay dirección de envío especificada", "error");
      return;
    }

    const order: Order = {
      id: 0,
      user_id: user.id,
      store_id: store.id,
      total: getCartTotal(),
      order_date: new Date(),
      sent_date: undefined,
      address: user.home_address,
    };

    const order_id = await insertOrder(order);

    if (!order_id) {
      showSnackbar("No se pudo crear el pedido", "error");
      return;
    }

    cart.map((cartItem) => {
      insertOrderLine({
        id: 0,
        order_id: order_id,
        pizza: cartItem.pizza,
        quantity: cartItem.quantity,
      });
    });

    showSnackbar("Se ha creado el pedido", "success");
    clearCart();
    changeStore(undefined);
    redirectTo("/dashboard/my-orders");
  };
  return (
    <Button variant="contained" onClick={handleClick}>
      Completar la compra
    </Button>
  );
}

function OrderData() {
  const { cart, getCartTotal, store } = useShoppingCart();

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
          {!store ? (
            <AlertError>Aún no has seleccionado una tienda</AlertError>
          ) : (
            <Typography variant="h6">Tienda: {store.name}</Typography>
          )}
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
