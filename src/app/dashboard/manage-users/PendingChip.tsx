"use client";

import React from "react";
import { Button, Chip, Stack } from "@mui/material";
import { useState } from "react";
import { Modal, Typography } from "@mui/material";
import { PaperStack } from "#/components/containers/PaperStack";
import { User } from "#/models/user";
import {
  update as updateUser,
  deleteWithId as deleteUser,
} from "#/models/user";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useSnackBar } from "#/contexts/SnackbarContext";

// https://mui.com/material-ui/react-modal/

interface Props {
  user: User;
}

const roles = {
  admin: "Administrador",
  manager: "Gerente",
  customer: "Cliente",
};

export default function PendingChip({ user }: Props) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const { showSnackbar } = useSnackBar();

  function handleReload() {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function accept() {
    console.log("not sure why it works worse when async await");
    user.status = "validated";
    updateUser(user);
    handleClose();
    handleReload();
    showSnackbar(`Has aceptado a ${user.email}`, "success");
  }
  function reject() {
    console.log("not sure why it works worse when async await");
    deleteUser(user.id);
    handleClose();
    handleReload();
    showSnackbar(`Has rechazado a ${user.email}`, "error");
  }

  return (
    <>
      <Chip label="Pendiente" color="warning" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PaperStack
          spacing={2}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: 275, sm: 400 },
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Validar usuario
          </Typography>
          <Typography id="modal-modal-description">{user.email}</Typography>
          <Typography id="modal-modal-description-2">
            Rol solicitado: {roles[user.role]}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={accept}>
              Aceptar
            </Button>
            <Button variant="contained" color="error" onClick={reject}>
              Rechazar
            </Button>
          </Stack>
        </PaperStack>
      </Modal>
    </>
  );
}
