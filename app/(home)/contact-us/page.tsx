import { Metadata } from "next";
import ContactScreen from "#/screens/ContactUs";

const pageTitle = "Contáctanos";

export const metadata: Metadata = {
  title: pageTitle,
};

// originalmente tenía el código de la página directamente aquí.
// sin embargo Metadata sólo puede ser usado desde el lado del servidor,
// y para el formulario necesito usar hooks que requieren 'use client'
// lo he separado y colocado en /src/screens

// parece ser buena práctica para escalabilidad y separación de responsabilidades

export default function Page() {
  return <ContactScreen pageTitle={pageTitle} />;
}
