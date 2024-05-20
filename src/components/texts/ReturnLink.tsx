import React from "react";
import NextLink from "next/link";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function ReturnLink({ href, children }: Props) {
  return (
    <Box
      display={"flex"}
      component={NextLink}
      href={href}
      sx={{ color: "primary.main", textDecoration: "none" }}
    >
      <ArrowBackIcon sx={{ mr: 1, display: "flex" }} />
      <Typography variant="body1" noWrap sx={{ fontWeight: 700 }}>
        {children}
      </Typography>
    </Box>
  );
}
