import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import { getWithId as getPizza } from "#/models/pizza";
import { Stack } from "@mui/material";
import ReturnLink from "#/components/texts/ReturnLink";
import CreateEditPizzaForm from "./CreateEditPizzaForm";
import H1 from "#/components/texts/H1";
import { PaperStack } from "#/components/containers/PaperStack";

const pageTitle = "Gestión de pizzas";

export const metadata: Metadata = {
  title: pageTitle,
};

// no puedo poner directamente id, tiene que estar dentro de params que es una propiedad especial de next js
// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
interface Props {
  params: { id: number };
}

export default async function Page({ params }: Props) {
  const user = await getSessionUser();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (!user) throw new Error("No hay usuario logueado");

  if (user.role !== "admin")
    throw new Error("Este usuario no tiene permiso para ver esta página");

  const { id } = params || {};

  // si no encuentra la pizza será crear pizza nueva.
  const pizza = await getPizza(id);

  return (
    <Stack spacing={3}>
      <ReturnLink href="/dashboard/manage-pizzas">
        Volver a todas las pizzas
      </ReturnLink>
      <PaperStack>
        <H1>{pizza ? "Editar" : "Nueva"} pizza</H1>
        <CreateEditPizzaForm pizza={pizza} />
      </PaperStack>
    </Stack>
  );
}
