import React from "react";
import { Metadata } from "next";
import { getSessionUser } from "#/lib/session";
import { getTotalPages as getUserPages } from "#/models/user";
import Stack from "@mui/material/Stack";
import H1 from "#/components/texts/H1";
import SearchBar from "#/components/ui/SearchBar";
import UserTable from "./UserTable";
import { Suspense } from "react";
import TableSkeleton from "#/components/ui/TableSkeleton";
import Pagination from "#/components/ui/Pagination";
import { clamp } from "#/lib/utils";

const pageTitle = "Gestión de usuarios";

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
  const user = await getSessionUser();
  // en principio con middleware valido que no emtre en /dashboard/:slug si no hay sessión, pero no está de más
  if (!user) throw new Error("No hay usuario logueado");

  if (user.role !== "admin")
    throw new Error("Este usuario no tiene permiso para ver esta página");

  const { query, page } = searchParams || {};
  const totalPages = await getUserPages(query);
  const currentPage = clamp(Number(page) || 1, 1, totalPages);

  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>
      <SearchBar label="Busca por email" />
      <Suspense
        key={`${query} ${currentPage}`}
        fallback={<TableSkeleton rows={5} cols={5} />}
      >
        <UserTable query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} defaultPage={currentPage} />
    </Stack>
  );
}
