import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

export default function FacebookIcon() {
  return (
    <MuiLink
      color={"inherit"}
      target="_blank"
      rel="noopener"
      component={NextLink}
      href={"https://www.facebook.com/?locale=es_ES"}
    >
      <Facebook />
    </MuiLink>
  );
}
