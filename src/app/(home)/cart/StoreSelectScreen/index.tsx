import React from "react";
import { list as listStores } from "#/models/store";
import StoreSelect from "./StoreSelect";
import { Button } from "@mui/material";

export default async function StoreSelectScreen() {
  const stores = await listStores();

  return (
    <>
      <StoreSelect stores={stores} />
      <Button variant="contained">Continuar</Button>
    </>
  );
}
