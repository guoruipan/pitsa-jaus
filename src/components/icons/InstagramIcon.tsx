import React from "react";
import Instagram from "@mui/icons-material/Instagram";
import Link from "../texts/Link";

export default function InstagramIcon() {
  return (
    <Link
      href={"https://www.instagram.com/"}
      color={"inherit"}
      target="_blank"
      rel="noopener"
    >
      <Instagram />
    </Link>
  );
}
