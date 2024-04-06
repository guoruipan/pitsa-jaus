import React from "react";
import Stack from "@mui/material/Stack";
import H1 from "#/components/ui/H1";
import SearchBar from "./components/SearchBar";
import StoreTable from "./components/StoreTable";
import { Suspense } from "react";
import StoreTableSkeleton from "./components/StoreTableSkeleton";

interface Props {
  pageTitle: string;
  searchParams?: {
    query?: string;
    page?: string;
  };
}

// en next js, las páginas aceptan searchParams
// https://nextjs.org/docs/app/api-reference/file-conventions/page

export default function FindUsScreen({ pageTitle, searchParams }: Props) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  console.log("query in FindUsScreen:", query);
  console.log("currentPage in FindUsScreen:", currentPage);

  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>
      <SearchBar />
      <Suspense
        key={`${query} ${currentPage}`}
        fallback={<StoreTableSkeleton />}
      >
        <StoreTable query={query} currentPage={currentPage} />
      </Suspense>
    </Stack>
  );
}
