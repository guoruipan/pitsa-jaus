import { Store } from "#/models/store";
import React from "react";

interface Props {
  store: Store;
}

export default function ManageOrdersScreen({ store }: Props) {
  return <>Gestión de pedidos de {store.name}</>;
}
