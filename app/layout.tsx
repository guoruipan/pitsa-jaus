import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "#/components/Nav";
import Footer from "#/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | PitsaJaus',
    default: 'PitsaJaus',
  },
  description: "¡Sabor auténtico en cada bocado! PitsaJaus, donde la tradición se fusiona con el sabor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Nav />
        <main className="container mx-auto my-6 px-10 md:px-0">
          {/* aplico más padding cuando la pantalla es pequeñs */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
