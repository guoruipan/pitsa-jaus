// AppRouterCacheProvider es recomendable para trabajar con mui
// https://mui.com/material-ui/integrations/nextjs/
import React from 'react';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import Nav from "#/layout/Nav";
import Footer from "#/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "#/theme";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  title: {
    template: "%s | PitsaJaus",
    default: "PitsaJaus",
  },
  description:
    "¡Sabor auténtico en cada bocado! PitsaJaus, donde la tradición se fusiona con el sabor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Box
        component="body"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Nav />
            <Container component="main" maxWidth="lg" sx={{ my: "3rem" }}>
              {children}
            </Container>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Box>
    </html>
  );
}
