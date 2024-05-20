"use client";

import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Pizza } from "#/models/pizza";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { redirectTo } from "#/lib/navigation";

// https://mui.com/material-ui/react-menu/#basic-menu
// https://mui.com/material-ui/react-popover/#anchor-playground

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
        <MenuItem onClick={handleClose}>Eliminar</MenuItem>
      </Menu>
    </>
  );
}
