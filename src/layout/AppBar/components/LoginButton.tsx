import React from "react";
import NextLink from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import { Typography, Box } from "@mui/material";

export default function LoginButton() {
  return (
    <Box
      display={"flex"}
      component={NextLink}
      href={"/auth/login"}
      sx={{ color: "inherit", textDecoration: "none" }}
    >
      <LoginIcon sx={{ mr: 1, display: "flex" }} />
      <Typography
        variant="body1"
        noWrap
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
        }}
      >
        Inicia sesión
      </Typography>
    </Box>
  );
}
