import React from "react";
import { Metadata } from "next";
import MenuItemScreen from "#/screens/MenuItem";
import { getSessionUser } from "#/lib/session";

const pageTitle = "Pizza";

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

  return <MenuItemScreen id={params.id} user={user} />;
}
