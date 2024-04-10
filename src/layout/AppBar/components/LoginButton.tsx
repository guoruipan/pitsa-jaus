import React from "react";
import NextLink from "next/link";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";

export default function LoginButton() {
  return (
    <>
      <NextLink href="/login">
        <LoginIcon sx={{ mr: 1, display: "flex", fill: "white" }} /> {/* no he logrado cambiar el color de otra forma */}
      </NextLink>
      <Typography
        variant="body1"
        noWrap
        component={NextLink}
        href="/login"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Inicia sesión
      </Typography>
    </>
  );
}
