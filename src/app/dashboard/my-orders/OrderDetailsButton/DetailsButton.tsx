"use client";

import React, { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { formatCurrency, getPizzaPhoto } from "#/lib/utils";
import Image from "next/image";
import { OrderLineDetails } from "#/models/order";

export default function DetailsButton({
  orderDetails,
}: {
  orderDetails: OrderLineDetails[];
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <InfoIcon />
      </IconButton>
      <Dialog onClose={handleClose} open={open} maxWidth={"md"}>
        <DialogTitle>Detalles de la compra</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="cart table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Pizza</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderDetails.map((orderLine) => (
                  <TableRow
                    key={orderLine.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {
                        <Image
                          src={getPizzaPhoto(orderLine)}
                          width={50}
                          height={50}
                          alt="foto pizza"
                          style={{ borderRadius: "1rem" }}
                        />
                      }
                    </TableCell>
                    <TableCell>{orderLine.name}</TableCell>
                    <TableCell align="right">
                      {formatCurrency(orderLine.price)}
                    </TableCell>
                    <TableCell align="right">{orderLine.quantity}</TableCell>
                    <TableCell align="right">
                      {formatCurrency(orderLine.price * orderLine.quantity)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
      </Dialog>
    </>
  );
}
