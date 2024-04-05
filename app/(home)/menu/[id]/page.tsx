import { Metadata } from "next";
import MenuItemScreen from "#/screens/MenuItem";

const pageTitle = "Pizza";

export const metadata: Metadata = {
  title: pageTitle,
};

interface Props {
  // parece que no puedo poner directamente id, tiene que estar dentro de params
  params: { id: number };
}

export default function Page({ params }: Props) {
  return <MenuItemScreen id={params.id} />;
}
