import React, { Suspense } from "react";
import { listCustomerOrders } from "#/models/order";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip, CircularProgress } from "@mui/material";
import { formatCurrency } from "#/lib/utils";
import OrderDetailsButton from "./OrderDetailsButton";

interface Props {
  currentPage: number;
  user_id: number;
}

export default async function OrdersTable({ currentPage, user_id }: Props) {
  const orders = await listCustomerOrders(currentPage, user_id);

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} aria-label="Tabla de pedidos">
        <TableHead>
          <TableRow>
            <TableCell>Tienda</TableCell>
            <TableCell>Dirección envío</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Fecha pedido</TableCell>
            <TableCell align="right">Fecha entrega</TableCell>
            <TableCell align="right">Detalles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.storename}
              </TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell align="right">{formatCurrency(order.total)}</TableCell>
              <TableCell align="right">
                {order.order_date.toLocaleDateString()}
              </TableCell>
              <TableCell align="right">
                {order.sent_date?.toLocaleDateString() || (
                  <Chip label="Pendiente" color="warning" />
                )}
              </TableCell>
              <TableCell align="right">
                <Suspense key={`${order.id}`} fallback={<CircularProgress />}>
                  <OrderDetailsButton order_id={order.id} />
                </Suspense>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
