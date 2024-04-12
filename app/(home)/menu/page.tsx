import React from "react";
import MenuScreen from "#/screens/Menu";
import { Metadata } from "next";

const pageTitle = "Nuestra Carta";

export const metadata: Metadata = {
  title: pageTitle,
};

// searchParams es una prop de las páginas next.js
// https://nextjs.org/docs/app/api-reference/file-conventions/page

interface Props {
  searchParams?: {
    page?: string;
  };
}

export default function Page({ searchParams }: Props) {
  return <MenuScreen pageTitle={pageTitle} page={searchParams?.page} />;
}
