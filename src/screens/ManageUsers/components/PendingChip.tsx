"use client";

import React from "react";
import { Button, Chip, Stack } from "@mui/material";
import { useState } from "react";
import { Modal, Typography } from "@mui/material";

// https://mui.com/material-ui/react-modal/

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  user_id: number;
}

export default function PendingChip({ user_id }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function accept() {}
  function reject() {}

  return (
    <>
      <Chip label="Pendiente" color="warning" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack spacing={2} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Validar usuario
          </Typography>
          <Typography id="modal-modal-description">{user_id}</Typography>
          <Button variant="contained" color="success" onClick={accept}>
            Aceptar
          </Button>
          <Button variant="contained" color="error" onClick={reject}>
            Rechazar
          </Button>
        </Stack>
      </Modal>
    </>
  );
}
