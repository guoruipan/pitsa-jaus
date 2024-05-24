"use client";

import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Pizza } from "#/models/pizza";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { redirectTo } from "#/lib/navigation";
import { useSnackbar } from "#/contexts/SnackbarContext";
import { deleteWithId as deletePizza } from "#/models/pizza";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

// https://mui.com/material-ui/react-menu/#basic-menu
// https://mui.com/material-ui/react-popover/#anchor-playground

// https://mui.com/material-ui/react-dialog/

interface Props {
  pizza: Pizza;
}

export default function PizzaOptions({ pizza }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openDialog, setOpenDialog] = React.useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            redirectTo(`/dashboard/manage-pizzas/${pizza.id}`);
            handleClose();
          }}
        >
          Editar
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleOpenDialog();
            handleClose();
          }}
        >
          Eliminar
        </MenuItem>
      </Menu>
      <DeletePizzaDialog
        open={openDialog}
        onClose={handleCloseDialog}
        pizza={pizza}
      />
    </>
  );
}
function DeletePizzaDialog({
  open,
  onClose,
  pizza,
}: {
  open: boolean;
  onClose: () => void;
  pizza: Pizza;
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
  const handleDeleteClick = () => {
    console.log("not sure why it works worse when async await");
    deletePizza(pizza.id);
    handleClose();
    handleReload();
    showSnackbar(`Se ha borrado la pizza ${pizza.name}`, "success");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Borrar pizza</DialogTitle>
      <DialogContent>
        <DialogContentText>
          ¿Realmente borrar la pizza {pizza.name}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color={"error"} onClick={handleDeleteClick}>
          Borrar
        </Button>
        <Button variant="contained" color="secondary" onClick={handleClose}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
