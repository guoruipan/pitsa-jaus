import React from "react";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

interface Props {
  breakpoint: "xs" | "md";
}

export default function LogoAndTitle ({breakpoint} : Props) {
  return breakpoint === "xs"? <LogoAndTitleXS/> : <LogoAndTitleMD/>;
}

const LogoAndTitleXS = () => {
  return (
    <>
      <LocalPizzaIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component={NextLink}
        href="/"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        PITSAJAUS
      </Typography>
    </>
  );
}

const LogoAndTitleMD = () => {
  return (
    <>
      <LocalPizzaIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component={NextLink}
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        PITSAJAUS
      </Typography>
    </>
  );
}