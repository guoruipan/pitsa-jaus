"use client";

import React from "react";
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useSnackbar } from "#/contexts/SnackbarContext";
import { Order, updateOrder } from "#/models/order";

// https://mui.com/material-ui/react-dialog/

export default function PendingChip({ order }: { order: Order }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Chip label="Pendiente" color="warning" onClick={handleOpen} />
      <ValidateSentDateDialog open={open} onClose={handleClose} order={order} />
    </>
  );
}

function ValidateSentDateDialog({
  open,
  onClose,
  order,
}: {
  open: boolean;
  onClose: () => void;
  order: Order;
}) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const { showSnackbar } = useSnackbar();

  function handleReload() {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  }

  const handleClose = () => {
    onClose();
  };

  const accept = async () => {
    const updatedOrder = order;
    updatedOrder.sent_date = new Date();
    await updateOrder(updatedOrder);
    handleClose();
    handleReload();
    showSnackbar(`Has marcado el pedido como enviado`, "success");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>¿Enviar pedido?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Esto marcará el pedido como enviado a fecha de{" "}
          {new Date().toLocaleDateString()}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color={"success"} onClick={accept}>
          Aceptar
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
