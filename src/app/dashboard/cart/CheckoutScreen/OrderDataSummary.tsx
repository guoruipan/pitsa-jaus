import React from "react";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";
import {
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
import H2 from "#/components/texts/H2";
import { AlertError } from "#/components/ui/Alert";
import { formatCurrency } from "#/lib/utils";

export default function OrderDataSummary() {
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
