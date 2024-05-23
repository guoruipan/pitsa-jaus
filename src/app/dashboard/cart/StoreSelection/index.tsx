"use client";

import React from "react";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Store } from "#/models/store";
import { useShoppingCart } from "#/contexts/ShoppingCartContext";

export default function StoreSelection({ stores }: { stores: Store[] }) {
  const { store, changeStore } = useShoppingCart();
  const [selectedStore, setSelectedStore] = useState<Store | undefined>(store);

  const handleChange = (event: SelectChangeEvent) => {
    const newStoreId = Number(event.target.value);
    const newStore = stores.find((store) => store.id === newStoreId);

    // newStore puede ser undefined
    setSelectedStore(newStore);
    changeStore(newStore);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="store-select-label">Selecciona una tienda</InputLabel>
      <Select
        labelId="store-select-label"
        id="store-select"
        label="Tienda"
        value={selectedStore?.id.toString() || "0"}
        onChange={handleChange}
      >
        <MenuItem key={0} value={0}>
          -- Selecciona una opción --
        </MenuItem>
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
