import React from 'react';
import { Metadata } from "next";
import MenuItemScreen from "#/screens/MenuItem";

const pageTitle = "Pizza";

export const metadata: Metadata = {
  title: pageTitle,
};

interface Props {
  // no puedo poner directamente id, tiene que estar dentro de params que es una propiedad especial de next js
  // https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
  params: { id: number };
}

export default function Page({ params }: Props) {
  return <MenuItemScreen id={params.id} />;
}
