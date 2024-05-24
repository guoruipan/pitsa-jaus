import React from "react";
import { Metadata } from "next";
import { checkUserRole } from "#/lib/session";
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
  const user = await checkUserRole("manager");

  const store = await getStore(user.id);

  return (
    <PaperStack spacing={4}>
      <Stack spacing={2}>
        <H1>{store ? "Mi" : "Registra tu"} tienda</H1>
        <Typography variant="body1">
          {store
            ? "Edita la información de tu tienda aquí"
            : "No hay una tienda asociada a tu perfil todavía. Creála ahora:"}
        </Typography>
      </Stack>
      <CreateEditStoreForm manager_id={user.id} store={store} />
    </PaperStack>
  );
}
