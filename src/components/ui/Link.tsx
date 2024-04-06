import React from 'react';
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import { TypographyProps } from "@mui/material/Typography";

// quiero usar los estilos predefinidos de MuiLink, pero la funcionalidad de NextLink

// MuiLink tiene acceso a las props de Typography, como son variant y sx
interface Props extends TypographyProps {
  href: string;
  children: React.ReactNode;
}

// utilizando la sintaxis ...rest, permito añadir las props adicionales de TypographyProps
export default function Link({ href, children, ...rest }: Props) {
  return (
    <MuiLink component={NextLink} href={href} underline="hover" {...rest}>
      {children}
    </MuiLink>
  );
}
