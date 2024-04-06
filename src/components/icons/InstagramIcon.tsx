import React from "react";
import Instagram from "@mui/icons-material/Instagram";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

export default function InstagramIcon() {
  return (
    <MuiLink
      color={"inherit"}
      target="_blank"
      rel="noopener"
      component={NextLink}
      href={"https://www.instagram.com/"}
    >
      <Instagram />
    </MuiLink>
  );
}
