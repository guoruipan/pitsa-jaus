import React from 'react';
import Typography from "@mui/material/Typography";
import { TypographyProps } from "@mui/material/Typography";

interface Props extends TypographyProps {
  children: React.ReactNode;
}

// en lugar de modificar el tamaño de las fuentes de forma global en el tema, prefiero hacer esto
// mantengo el elemento adecuado (h1) por SEO y accesibilidad (como lectores de pantalla)
// pero utilizo los estilos de mui h2, que me parecen mejores para mi web

export default function H1({ children, ...rest }: Props) {
  return (
    <Typography variant="h2" component={"h1"} {...rest}>
      {children}
    </Typography>
  );
}
