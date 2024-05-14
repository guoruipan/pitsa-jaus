import React from "react";
import { list as listStores } from "#/models/store";
import StoreSelect from "./StoreSelect";
import { Button, Typography } from "@mui/material";

export default async function Page() {
  const stores = await listStores();

  return (
    <>
      <StoreSelect stores={stores} />
      <Typography>Confirma tus datos</Typography>
      <Typography>Confirma confirma los datos de la compra</Typography>
      <Button variant="contained">Completar la compra</Button>
    </>
  );
}
