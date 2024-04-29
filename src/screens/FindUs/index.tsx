import React from "react";
import Stack from "@mui/material/Stack";
import H1 from "#/components/texts/H1";
import SearchBar from "#/components/ui/SearchBar";
import StoreTable from "./components/StoreTable";
import { Suspense } from "react";
import TableSkeleton from "#/components/ui/TableSkeleton";
import { getTotalPages as getStorePages } from "#/models/store";
import Pagination from "#/components/ui/Pagination";
import { clamp } from "#/lib/utils";

interface Props {
  pageTitle: string;
  query?: string;
  page?: string;
}

export default async function FindUsScreen({ pageTitle, query, page }: Props) {
  const totalPages = await getStorePages(query);
  const currentPage = clamp(Number(page) || 1, 1, totalPages);

  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>
      <SearchBar label="Busca por código postal" />
      <Suspense
        key={`${query} ${currentPage}`}
        fallback={<TableSkeleton rows={5} cols={6} />}
      >
        <StoreTable query={query} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} defaultPage={currentPage} />
    </Stack>
  );
}
