import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import Link from "../texts/Link";

export default function FacebookIcon() {
  return (
    <Link
      href={"https://www.facebook.com/?locale=es_ES"}
      color={"inherit"}
      target="_blank"
      rel="noopener"
    >
      <Facebook />
    </Link>
  );
}
