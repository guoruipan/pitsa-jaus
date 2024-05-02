import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import { getWithManagerId as getStore } from "#/models/store";
import ManageOrdersScreen from "#/screens/ManageOrders";
import { CenteredPaperStack } from "#/components/containers/PaperStack";
import H1 from "#/components/texts/H1";
import { Button, Typography } from "@mui/material";
import Link from "#/components/texts/Link";

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

  return store ? <ManageOrdersScreen store={store} /> : <NoStoreYet />;
}

function NoStoreYet() {
  return (
    <CenteredPaperStack>
      <H1>¡Vaya!</H1>
      <Typography variant="body1">
        Parece que no has creado tu tienda todavía
      </Typography>
      <Button variant="contained">
        <Link color={"inherit"} underline="none" href="/dashboard/my-store">
          Crear mi tienda
        </Link>
      </Button>
    </CenteredPaperStack>
  );
}
