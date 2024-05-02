import React from "react";
import { Metadata } from "next";
import H1 from "#/components/texts/H1";
import LoginForm from "./LoginForm";
import { Typography } from "@mui/material";
import Link from "#/components/texts/Link";
import { CenteredPaperStack } from "#/components/containers/PaperStack";

const pageTitle = "Inicia sesión";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return (
    <CenteredPaperStack>
      <H1>{pageTitle}</H1>
      <LoginForm />
      <Typography variant="body1">
        ¿No tienes cuenta?{" "}
        <Link href="/auth/register" underline="hover">
          Regístrate
        </Link>
      </Typography>
    </CenteredPaperStack>
  );
}
