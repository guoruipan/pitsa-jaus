import React, { Suspense } from "react";
import { Metadata } from "next";
import { checkUserRole } from "#/lib/session";
import { getCustomerOrderTotalPages } from "#/models/order";
import { clamp } from "#/lib/utils";
import { Stack } from "@mui/material";
import H1 from "#/components/texts/H1";
import TableSkeleton from "#/components/ui/TableSkeleton";
import OrdersTable from "./OrdersTable";
import MyPagination from "#/components/ui/Pagination";

const pageTitle = "Mis pedidos";

export const metadata: Metadata = {
  title: pageTitle,
};

interface Props {
  searchParams?: {
    page?: string;
  };
}

export default async function Page({ searchParams }: Props) {
  const user = await checkUserRole("customer");

  const { page } = searchParams || {};
  const totalPages = await getCustomerOrderTotalPages(user.id);
  const currentPage = clamp(Number(page) || 1, 1, totalPages);

  return (
    <Stack spacing={3}>
      <H1>{pageTitle}</H1>
      <Suspense
        key={`${currentPage}`}
        fallback={<TableSkeleton rows={5} cols={6} />}
      >
        <OrdersTable currentPage={currentPage} user_id={user.id} />
      </Suspense>
      <MyPagination totalPages={totalPages} defaultPage={currentPage} />
    </Stack>
  );
}
