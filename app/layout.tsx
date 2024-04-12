// AppRouterCacheProvider es recomendable para trabajar con mui
// https://mui.com/material-ui/integrations/nextjs/
import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import AppBar from "#/layout/AppBar";
import Footer from "#/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "#/theme";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

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
      <Stack
        component="body"
        sx={{
          minHeight: "100vh",
        }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar />
            <Container
              component="main"
              maxWidth="lg"
              sx={{ pt: "3rem", pb: "4rem", my: "auto" }}
            >
              {children}
            </Container>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </Stack>
    </html>
  );
}
