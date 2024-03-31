// AppRouterCacheProvider es recomendable para trabajar con mui
// https://mui.com/material-ui/integrations/nextjs/
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import Nav from "#/components/Nav";
import Footer from "#/components/Footer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "#/theme";

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
            <Nav />
            <main className="container mx-auto my-6 px-10 md:px-0">
              {/* aplico más padding cuando la pantalla es pequeñs */}
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
