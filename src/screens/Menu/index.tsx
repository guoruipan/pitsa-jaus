import React from "react";
import H1 from "#/components/texts/H1";
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

  // Number(page) || 1 -> Recibe el param page, si es NaN o undefined por defecto es 1
  // Math.min(..., totalPages) -> devuelve el menor de los dos nums, para asegurarme de que page no exceda totalPages
  // Max.max(1, ...) -> devuelve el mayor de los dos nums, para asegurarme de que page no sea menor que 1
  const currentPage = Math.max(1, Math.min(Number(page) || 1, totalPages));

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
