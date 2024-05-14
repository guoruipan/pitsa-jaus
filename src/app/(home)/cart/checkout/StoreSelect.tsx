"use client";

import React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Store } from "#/models/store";

interface Props {
  stores: Store[];
}

export default function StoreSelect({ stores }: Props) {
  const [store, setStore] = useState<Store | undefined>();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedStoreId = Number(event.target.value);
    const selectedStore = stores.find((store) => store.id === selectedStoreId);
    if (selectedStore) setStore(selectedStore);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="store-select-label">Selecciona una tienda</InputLabel>
      <Select
        labelId="store-select-label"
        id="store-select"
        label="Tienda"
        value={store?.id.toString()}
        onChange={handleChange}
      >
        {stores.map((s) => {
          return (
            <MenuItem key={s.id} value={s.id}>
              {s.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
