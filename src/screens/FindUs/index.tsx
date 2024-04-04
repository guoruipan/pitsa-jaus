"use client";

import PageTitle from "#/components/ui/PageTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Store } from '#/models/store';

interface Params {
  pageTitle: string,
  stores: Store [],
}

export default function FindUsScreen({ pageTitle, stores }: Params) {
  const [postCode, setPostCode] = useState("");

  function handleInputChange (newValue : string) {
    setPostCode(newValue)
  }

  return (
    <>
      <PageTitle gutterBottom>{pageTitle}</PageTitle>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchIcon sx={{ mr: 1, my: 0.5 }} />
        <TextField
          id="inputPostcode"
          label="Escribe tu código postal"
          variant="standard"
          fullWidth
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(event.target.value);
          }}
        />
      </Box>
      {/* implement query to get locals */}
      <p>{postCode}</p>

      {stores.map((store) => (
        <p>{store.name}</p>
      ))}
    </>
  );
}
