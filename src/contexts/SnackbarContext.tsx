"use client";

import React, { createContext, useState, useContext } from "react";
import { Snackbar, Alert } from "@mui/material";

// https://mui.com/material-ui/react-snackbar/#introduction
// https://mui.com/material-ui/react-snackbar/#consecutive-snackbars

type Severity = "success" | "info" | "warning" | "error" | undefined;

interface SnackbarMessage {
  message: string;
  key: number;
}

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
  const [snackPack, setSnackPack] = React.useState<readonly SnackbarMessage[]>(
    [],
  );
  const [open, setOpen] = useState(false);
  const [messageInfo, setMessageInfo] = React.useState<
    SnackbarMessage | undefined
  >(undefined);
  const [severity, setSeverity] = useState<Severity>();

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const showSnackbar = (message: string, severity: Severity) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    setSeverity(severity);
    // setOpen(true);
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

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
      >
        <Alert onClose={handleClose} severity={severity}>
          {messageInfo ? messageInfo.message : undefined}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};
