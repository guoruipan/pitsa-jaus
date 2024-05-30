import React from "react";
// AppRouterCacheProvider es recomendable para trabajar con mui
// https://mui.com/material-ui/integrations/nextjs/
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import AppBar from "#/components/layout/AppBar";
import Footer from "#/components/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
// https://mui.com/material-ui/react-css-baseline/
import CssBaseline from "@mui/material/CssBaseline";
import theme from "#/theme";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { ShoppingCartProvider } from "#/contexts/ShoppingCartContext";
import { SnackBarProvider } from "#/contexts/SnackbarContext";

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
    <html lang="es-ES">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <ShoppingCartProvider>
              <SnackBarProvider>
                <CssBaseline />
                <InnerLayout>{children as React.ReactNode}</InnerLayout>
              </SnackBarProvider>
            </ShoppingCartProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

function InnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <AppBar />
      <Container
        component="main"
        maxWidth="lg"
        sx={{ pt: "3rem", pb: "4rem", my: "auto" }}
      >
        {children}
      </Container>
      <Footer />
    </Stack>
  );
}
