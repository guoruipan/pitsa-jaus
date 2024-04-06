import React from "react";
import { Metadata } from "next";
import FindUsScreen from "#/screens/FindUs";

const pageTitle = "Encuentra tu PitsaJaus";

export const metadata: Metadata = {
  title: pageTitle,
};

// en next js, las páginas aceptan searchParams
// https://nextjs.org/docs/app/api-reference/file-conventions/page
interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default function Page({searchParams} : Props) {
  return <FindUsScreen pageTitle={pageTitle} query={searchParams?.query} page={searchParams?.page} />;
}
