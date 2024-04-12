import React from "react";
import H1 from "#/components/texts/H1";
import LoginForm from "./components/LoginForm";
import { Typography } from "@mui/material";
import Link from "#/components/texts/Link";
import { CenteredPaperStack } from "#/components/containers/PaperStack";

interface Props {
  pageTitle: string;
}

export default function LoginScreen({ pageTitle }: Props) {
  return (
    <CenteredPaperStack>
      <H1>{pageTitle}</H1>
      <LoginForm />
      <Typography variant="body1">
        ¿No tienes cuenta?{" "}
        <Link href="/register" underline="hover">
          Regístrate
        </Link>
      </Typography>
    </CenteredPaperStack>
  );
}
