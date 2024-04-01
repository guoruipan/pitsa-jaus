'use client';

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

// https://m2.material.io/inline-tools/color/
// https://m2.material.io/design/color/the-color-system.html#color-usage-and-palettes
// https://zenoo.github.io/mui-theme-creator/

// logo colors: #FFDE59, #DB0000


const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
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
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;
