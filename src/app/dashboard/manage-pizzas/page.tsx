import React, { Suspense } from "react";
import { Metadata } from "next";
import { checkUserRole } from "#/lib/session";
import { getTotalPages as getPizzaPages } from "#/models/pizza";
import { clamp } from "#/lib/utils";
import { Box, Button, Stack } from "@mui/material";
import H1 from "#/components/texts/H1";
import SearchBar from "#/components/ui/SearchBar";
import TableSkeleton from "#/components/ui/TableSkeleton";
import Pagination from "#/components/ui/Pagination";
import PizzaTable from "./PizzaTable";
import NextLink from "next/link";

const pageTitle = "Gestión de pizzas";

export const metadata: Metadata = {
  title: pageTitle,
};

interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  // test
  await checkUserRole("admin");

  const { query, page } = searchParams || {};
  const totalPages = await getPizzaPages(query);
  const currentPage = clamp(Number(page) || 1, 1, totalPages);

  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <Button
          variant="contained"
          component={NextLink}
          href="/dashboard/manage-pizzas/0"
        >
          Nuevo
        </Button>
      </Box>
      <SearchBar label="Busca por nombre" />
      <Suspense
        key={`${query} ${currentPage}`}
        fallback={<TableSkeleton rows={5} cols={5} />}
      >
        <PizzaTable query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} activePage={currentPage} />
    </Stack>
  );
}
