"use client";

// https://nextjs.org/learn/dashboard-app/adding-search-and-pagination

import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon sx={{ mr: 1, my: 0.5 }} />
      <TextField
        id="inputPostcode"
        label="Escribe tu código postal"
        variant="standard"
        fullWidth
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleSearch(event.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
    </Box>
  );
}
