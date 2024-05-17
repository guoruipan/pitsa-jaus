import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import { getWithManagerId as getStore } from "#/models/store";
import H1 from "#/components/texts/H1";
import { Stack, Typography } from "@mui/material";
import { PaperStack } from "#/components/containers/PaperStack";
import CreateEditStoreForm from "./CreateEditStoreForm";

const pageTitle = "Mi tienda";

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

  return store ? (
    <PaperStack>
      <H1>Mi tienda</H1>
      <CreateEditStoreForm manager_id={user.id} store={store} />
    </PaperStack>
  ) : (
    <PaperStack spacing={4}>
      <Stack spacing={2}>
        <H1>Registra tu tienda</H1>
        <Typography variant="body1">
          No hay una tienda asociada a tu perfil todavía. Creála ahora:
        </Typography>
      </Stack>

      <CreateEditStoreForm manager_id={user.id} store={undefined} />
    </PaperStack>
  );
}
