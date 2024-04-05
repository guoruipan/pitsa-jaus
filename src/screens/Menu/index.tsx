import VerticalSpacedBox from "#/components/ui/VerticalSpacedBox";
import PageTitle from "#/components/ui/PageTitle";
import { Suspense } from "react";
import MenuGridSkeleton from "./components/MenuGridSkeleton";
import MenuGrid from "./components/MenuGrid";

interface Params {
  pageTitle: string;
}

/* suspense permite renderizar el componente MenuGrid de forma más dinámica, sin bloquear la funcionalidad del resto de la página mientras cargan los datos  */
/* https://nextjs.org/learn/dashboard-app/streaming  */

export default function MenuScreen({ pageTitle }: Params) {
  return (
    <VerticalSpacedBox>
      <PageTitle gutterBottom>{pageTitle}</PageTitle>
      <Suspense fallback={<MenuGridSkeleton />}>
        <MenuGrid />
      </Suspense>
    </VerticalSpacedBox>
  );
}
