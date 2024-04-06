import React from "react";
import Stack from "@mui/material/Stack";
import H1 from "#/components/ui/H1";
import SearchBar from "./components/SearchBar";
import StoreTable from "./components/StoreTable";
import { Suspense } from "react";
import StoreTableSkeleton from "./components/StoreTableSkeleton";

interface Props {
  pageTitle: string;
  query?: string;
  page?: string;
}

export default function FindUsScreen({ pageTitle, query, page }: Props) {
  const searchTerm = query || "";
  const currentPage = Number(page) || 1;

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
    </Stack>
  );
}
