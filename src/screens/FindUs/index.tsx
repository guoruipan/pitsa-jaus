import React from "react";
import Stack from "@mui/material/Stack";
import H1 from "#/components/ui/H1";
import SearchBar from "./components/SearchBar";
import StoreTable from "./components/StoreTable";
import { Suspense } from "react";
import StoreTableSkeleton from "./components/StoreTableSkeleton";
import { getTotalPages as getStorePages } from "#/models/store";
import Pagination from "#/components/ui/Pagination";

interface Props {
  pageTitle: string;
  query?: string;
  page?: string;
}

export default async function FindUsScreen({ pageTitle, query, page }: Props) {
  const searchTerm = query || "";
  const currentPage = Number(page) || 1;

  const totalPages = await getStorePages(query);

  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>
      <SearchBar />
      <Suspense
        key={`${searchTerm} ${currentPage}`}
        fallback={<StoreTableSkeleton />}
      >
        <StoreTable query={searchTerm} currentPage={currentPage} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </Stack>
  );
}
