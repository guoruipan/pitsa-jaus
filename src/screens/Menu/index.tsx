import React from "react";
import Stack from "@mui/material/Stack";
import H1 from "#/components/ui/H1";
import { Suspense } from "react";
import MenuGridSkeleton from "./components/MenuGridSkeleton";
import MenuGrid from "./components/MenuGrid";

interface Props {
  pageTitle: string;
}

/* suspense permite renderizar el componente MenuGrid de forma más dinámica, sin bloquear la funcionalidad del resto de la página mientras cargan los datos  */
/* https://nextjs.org/learn/dashboard-app/streaming  */

export default function MenuScreen({ pageTitle }: Props) {
  return (
    <Stack>
      <H1 gutterBottom>{pageTitle}</H1>
      <Suspense fallback={<MenuGridSkeleton />}>
        <MenuGrid />
      </Suspense>
    </Stack>
  );
}
