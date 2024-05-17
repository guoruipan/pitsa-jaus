"use client";

import React, { createContext, useState, useContext } from "react";
import { Snackbar, Alert } from "@mui/material";

type Severity = "success" | "info" | "warning" | "error" | undefined;

interface SnackbarContextProps {
  showSnackbar: (message: string, severity: Severity) => void;
}

const SnackbarContext = createContext<SnackbarContextProps>({
  showSnackbar: () => {},
});

export const useSnackBar = () => useContext(SnackbarContext);

export const SnackBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<Severity>();

  // controlo el timeout manualmente en lugar de utilizar autoHideDuration de Snackbar para evitar un error
  // donde al crear varios snacks consecutivos no se resetea el timeout (al ser realmente un sólo snack)

  const showSnackbar = (message: string, severity: Severity) => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};
