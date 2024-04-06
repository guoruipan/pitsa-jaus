import React from 'react';
import MenuScreen from "#/screens/Menu";
import { Metadata } from "next";

const pageTitle = "Nuestra Carta";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return <MenuScreen pageTitle={pageTitle} />;
}
