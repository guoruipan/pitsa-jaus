import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import { getWithManagerId as getStore } from "#/models/store";
import { CenteredPaperStack } from "#/components/containers/PaperStack";
import H1 from "#/components/texts/H1";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

const pageTitle = "Gestión de pedidos";

export const metadata: Metadata = {
  title: pageTitle,
};

export default async function Page() {
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  const user = await getSessionUser();
  if (!user) throw new Error("No hay usuario logueado");

  if (user.role !== "manager")
    throw new Error("Este usuario no tiene permiso para ver esta página");

  const store = await getStore(user.id);

  return store ? <>Gestión de pedidos</> : <NoStoreYet />;
}

function NoStoreYet() {
  return (
    <CenteredPaperStack>
      <H1>¡Vaya!</H1>
      <Typography variant="h6" component={"p"}>
        Parece que no has creado tu tienda todavía
      </Typography>
      <Button component={Link} href="/dashboard/my-store" variant="contained">
        Crear mi tienda
      </Button>
    </CenteredPaperStack>
  );
}
