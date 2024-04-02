"use client";

import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

// https://m2.material.io/inline-tools/color/
// https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes
// https://zenoo.github.io/mui-theme-creator/

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      // también hay light, dark, y contrastText. Son opcionales y se calculan automáticamente
      main: "#E95418",
    },
    secondary: {
      main: "#18aee9",
    },
  },
});

export default theme;
