import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import { getWithId as getPizza } from "#/models/pizza";
import { Stack } from "@mui/material";
import ReturnLink from "#/components/texts/ReturnLink";
import EditPizzaForm from "./EditPizzaForm";

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
  const pizza = await getPizza(id);
  if (!pizza) throw new Error("No se ha podido encontrar la pizza");

  return (
    <Stack spacing={3}>
      <ReturnLink href="/dashboard/manage-pizzas">
        Volver a todas las pizzas
      </ReturnLink>
      <EditPizzaForm />
    </Stack>
  );
}
