'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from "@mui/material/styles";

// https://m2.material.io/inline-tools/color/
// https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes
// https://zenoo.github.io/mui-theme-creator/

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
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
