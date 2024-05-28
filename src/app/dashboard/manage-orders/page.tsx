import React, { Suspense } from "react";
import { Metadata } from "next";
import { checkUserRole } from "#/lib/session";
import { getWithManagerId as getStore } from "#/models/store";
import { CenteredPaperStack } from "#/components/containers/PaperStack";
import H1 from "#/components/texts/H1";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { getStoreOrderTotalPages } from "#/models/order";
import { clamp } from "#/lib/utils";
import TableSkeleton from "#/components/ui/TableSkeleton";
import MyPagination from "#/components/ui/Pagination";
import StoreOrdersTable from "./StoreOrdersTable";

const pageTitle = "Gestión de pedidos";

export const metadata: Metadata = {
  title: pageTitle,
};

interface Props {
  searchParams?: {
    page?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const user = await checkUserRole("manager");
  const store = await getStore(user.id);

  const { page } = searchParams || {};

  return store ? (
    <StoreOrdersScreen page={page} store_id={store.id} />
  ) : (
    <NoStoreYet />
  );
}

async function StoreOrdersScreen({
  page,
  store_id,
}: {
  page: string | undefined;
  store_id: number;
}) {
  const totalPages = await getStoreOrderTotalPages(store_id);
  const currentPage = clamp(Number(page) || 1, 1, totalPages);

  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>
      <Suspense
        key={`${currentPage}`}
        fallback={<TableSkeleton rows={5} cols={6} />}
      >
        <StoreOrdersTable currentPage={currentPage} store_id={store_id} />
      </Suspense>
      <MyPagination totalPages={totalPages} defaultPage={currentPage} />
    </Stack>
  );
}

function NoStoreYet() {
  return (
    <CenteredPaperStack>
      <H1>¡Vaya!</H1>
      <Typography variant="h6" component={"p"}>
        Parece que no has creado tu tienda todavía
      </Typography>
      <Button component={Link} href="/dashboard/my-store" variant="contained">
        Crear mi tienda
      </Button>
    </CenteredPaperStack>
  );
}
