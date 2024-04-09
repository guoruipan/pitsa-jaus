import React from "react";
import H1 from "#/components/ui/H1";
import Stack from "@mui/material/Stack";
import LoginForm from "./components/LoginForm";
import { Typography } from "@mui/material";
import Link from "#/components/ui/Link";

interface Props {
  pageTitle: string;
}

export default function LoginScreen({ pageTitle }: Props) {
  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>
      <LoginForm />
      <Typography variant="body1">
        ¿No tienes cuenta? <Link href="/register">Regístrate</Link>
      </Typography>
    </Stack>
  );
}
