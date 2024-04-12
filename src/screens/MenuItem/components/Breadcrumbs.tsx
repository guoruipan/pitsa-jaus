import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "#/components/texts/Link";

interface Props {
  currentPageName: string;
}

export default function MyBreadcrumbs({ currentPageName }: Props) {
  return (
    <Breadcrumbs>
      <Link href="/menu" underline="hover">
        Nuestra carta
      </Link>
      <Typography color="text.primary">{currentPageName}</Typography>
    </Breadcrumbs>
  );
}
