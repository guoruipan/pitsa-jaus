import React from "react";
import { listStoreOrders } from "#/models/order";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Tooltip } from "@mui/material";
import { formatCurrency } from "#/lib/utils";
import OrderDetailsButton from "./OrderDetailsButton";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PendingChip from "./PendingChip";

interface Props {
  currentPage: number;
  store_id: number;
}

export default async function StoreOrdersTable({
  currentPage,
  store_id,
}: Props) {
  const orders = await listStoreOrders(currentPage, store_id);

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} aria-label="Tabla de pedidos">
        <TableHead>
          <TableRow>
            <TableCell>Usuario</TableCell>
            <TableCell>Dirección envío</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Fecha pedido</TableCell>
            <TableCell align="right">
              Fecha entrega
              <SentDateTooltip />
            </TableCell>
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
                {order.useremail}
              </TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell align="right">{formatCurrency(order.total)}</TableCell>
              <TableCell align="right">
                {order.order_date.toLocaleDateString()}
              </TableCell>
              <TableCell align="right">
                {order.sent_date?.toLocaleDateString() || (
                  <PendingChip order={order} />
                )}
              </TableCell>
              <TableCell align="right">
                <OrderDetailsButton order_id={order.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function SentDateTooltip() {
  return (
    <Tooltip title="Pulsa en el icono de Pendiente para confirmar el envío">
      <IconButton>
        <HelpOutlineIcon />
      </IconButton>
    </Tooltip>
  );
}
