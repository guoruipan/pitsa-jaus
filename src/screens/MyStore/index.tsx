import { Store } from "#/models/store";
import React from "react";
import EditStoreForm from "./components/EditStoreForm";
import { PaperStack } from "#/components/containers/PaperStack";
import H1 from "#/components/texts/H1";

interface Props {
  store: Store;
}

export default function MyStoreScreen({ store }: Props) {
  return (
    <PaperStack>
      <H1>Mi tienda</H1>
      <EditStoreForm store={store} />
    </PaperStack>
  );
}
