import React from "react";
import { Metadata } from "next";
import Stack from "@mui/material/Stack";
import H1 from "#/components/texts/H1";
import SearchBar from "#/components/ui/SearchBar";
import StoreTable from "./StoreTable";
import { Suspense } from "react";
import TableSkeleton from "#/components/ui/TableSkeleton";
import { getTotalPages as getStorePages } from "#/models/store";
import Pagination from "#/components/ui/Pagination";
import { clamp } from "#/lib/utils";

const pageTitle = "Encuentra tu PitsaJaus";

export const metadata: Metadata = {
  title: pageTitle,
};

// en next js, las páginas aceptan searchParams
// https://nextjs.org/docs/app/api-reference/file-conventions/page
interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const { query, page } = searchParams || {};
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
      <Pagination totalPages={totalPages} activePage={currentPage} />
    </Stack>
  );
}
