"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// desde que quité Tailwind CSS del proyecto, las imagenes de next/image y las fuentes de next/font me han dado problemas
// utilizo @fontsource como se recomienda en la página de mui
// https://mui.com/material-ui/react-typography/

// https://m2.material.io/inline-tools/color/
// https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes
// https://zenoo.github.io/mui-theme-creator/

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: "Roboto",
    },
    palette: {
      primary: {
        // también hay light, dark, y contrastText. Son opcionales y se calculan automáticamente
        main: "#E95418",
      },
      secondary: {
        main: "#666666",
      },
    },
  }),
);

export default theme;
