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
import { User } from "#/models/user";
import {
  update as updateUser,
  deleteWithId as deleteUser,
} from "#/models/user";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useSnackbar } from "#/contexts/SnackbarContext";

// https://mui.com/material-ui/react-dialog/

const roles = {
  admin: "Administrador",
  manager: "Gerente",
  customer: "Cliente",
};

export default function PendingChip({ user }: { user: User }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Chip label="Pendiente" color="warning" onClick={handleOpen} />
      <ValidateUserDialog open={open} onClose={handleClose} user={user} />
    </>
  );
}

function ValidateUserDialog({
  open,
  onClose,
  user,
}: {
  open: boolean;
  onClose: () => void;
  user: User;
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
    user.status = "validated";
    await updateUser(user);
    handleClose();
    handleReload();
    showSnackbar(`Has aceptado a ${user.email}`, "success");
  };
  const reject = async () => {
    await deleteUser(user.id);
    handleClose();
    handleReload();
    showSnackbar(`Has rechazado a ${user.email}`, "error");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Validar usuario</DialogTitle>
      <DialogContent>
        <DialogContentText>Usuario: {user.email}</DialogContentText>
        <DialogContentText>
          Rol solicitado: {roles[user.role]}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color={"success"} onClick={accept}>
          Aceptar
        </Button>
        <Button variant="contained" color="error" onClick={reject}>
          Rechazar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
