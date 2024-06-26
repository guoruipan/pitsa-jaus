"use client";

import React from "react";
import { Pagination } from "@mui/material";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface Props {
  totalPages: number;
  activePage?: number;
}

export default function MyPagination({ totalPages, activePage = 1 }: Props) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(event: React.ChangeEvent<unknown>, page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Pagination
      count={totalPages}
      color="secondary"
      page={activePage}
      onChange={(event, page) => {
        handleSearch(event, page);
      }}
    />
  );
}
