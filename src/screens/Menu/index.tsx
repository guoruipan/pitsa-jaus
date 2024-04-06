import React from "react";
import H1 from "#/components/ui/H1";
import { Suspense } from "react";
import MenuGridSkeleton from "./components/MenuGridSkeleton";
import MenuGrid from "./components/MenuGrid";
import { Stack } from "@mui/material";
import Pagination from "#/components/ui/Pagination";
import { getTotalPages as getPizzaPages } from "#/models/pizza";

interface Props {
  pageTitle: string;
  page?: string;
}

/* suspense permite renderizar el componente MenuGrid de forma más dinámica, sin bloquear la funcionalidad del resto de la página mientras cargan los datos  */
/* https://nextjs.org/learn/dashboard-app/streaming  */

export default async function MenuScreen({ pageTitle, page }: Props) {
  const totalPages = await getPizzaPages();

  const currentPage = Number(page) || 1;
  
  // este error sólo debería darse si el usuario introduce manualmente un número de página inválido
  if (currentPage > totalPages) {
    throw new Error("page parameter exceeds totalPages of pizzas");
  }

  return (
    <Stack spacing={3}>
      <H1 gutterBottom>{pageTitle}</H1>
      <Suspense fallback={<MenuGridSkeleton />}>
        <MenuGrid currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </Stack>
  );
}
