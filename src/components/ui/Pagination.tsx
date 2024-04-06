"use client";

import React from "react";
import { Pagination } from "@mui/material";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface Props {
  totalPages: number;
}

export default function MyPagination({ totalPages }: Props) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const query = searchParams.get("query") || "";

  function handleSearch(page: number) {
    const params = new URLSearchParams(searchParams);

    if (query !== "") {
      params.set('page', '1');
    }
    else {
      params.set("page", page.toString());
    }
    
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Pagination
      count={totalPages}
      color="secondary"
      defaultPage={currentPage}
      onChange={(event: React.ChangeEvent<unknown>, page: number) => {
        handleSearch(page);
      }}
    />
  );
}
