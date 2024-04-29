import React from "react";
import { getTotalPages as getUserPages } from "#/models/user";
import Stack from "@mui/material/Stack";
import H1 from "#/components/texts/H1";
import SearchBar from "#/components/ui/SearchBar";
import UserTable from "./components/UserTable";
import { Suspense } from "react";
import TableSkeleton from "#/components/ui/TableSkeleton";
import Pagination from "#/components/ui/Pagination";

interface Props {
  pageTitle: string;
  query?: string;
  page?: string;
}

export default async function ManageUsersScreen({
  pageTitle,
  query = "",
  page,
}: Props) {
  const totalPages = await getUserPages(query);

  // Number(page) || 1 -> Recibe el param page, si es NaN o undefined por defecto es 1
  // Math.min(..., totalPages) -> devuelve el menor de los dos nums, para asegurarme de que page no exceda totalPages
  // Max.max(1, ...) -> devuelve el mayor de los dos nums, para asegurarme de que page no sea menor que 1
  const currentPage = Math.max(1, Math.min(Number(page) || 1, totalPages));

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
