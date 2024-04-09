import React from "react";
import Button from "@mui/material/Button";
import NextLink from "next/link";

export default function LoginButton () {
    return <Button href="/login" variant="contained" color="secondary" component={NextLink}>Inicia sesión</Button>
}