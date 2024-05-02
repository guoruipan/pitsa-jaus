import React from "react";
import { Metadata } from "next";
import H1 from "#/components/texts/H1";
import { Suspense } from "react";
import MenuGridSkeleton from "./MenuGridSkeleton";
import MenuGrid from "./MenuGrid";
import { Stack } from "@mui/material";
import Pagination from "#/components/ui/Pagination";
import { getTotalPages as getPizzaPages } from "#/models/pizza";
import { clamp } from "#/lib/utils";

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

/* suspense permite renderizar el componente MenuGrid de forma más dinámica, sin bloquear la funcionalidad del resto de la página mientras cargan los datos  */
/* https://nextjs.org/learn/dashboard-app/streaming  */

export default async function Page({ searchParams }: Props) {
  const { page } = searchParams || {};
  const totalPages = await getPizzaPages();
  const currentPage = clamp(Number(page) || 1, 1, totalPages);

  return (
    <Stack spacing={3}>
      <H1 gutterBottom>{pageTitle}</H1>
      <Suspense fallback={<MenuGridSkeleton />}>
        <MenuGrid currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} defaultPage={currentPage} />
    </Stack>
  );
}
