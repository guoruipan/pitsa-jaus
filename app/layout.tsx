// AppRouterCacheProvider es recomendable para trabajar con mui
// https://mui.com/material-ui/integrations/nextjs/
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import Nav from "#/components/layout/Nav";
import Footer from "#/components/layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "#/theme";
import Container from "@mui/material/Container";

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
      <body className={`min-h-screen flex flex-col`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Nav />
            <Container component="main" className="my-6" maxWidth="lg">
              {children}
            </Container>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
