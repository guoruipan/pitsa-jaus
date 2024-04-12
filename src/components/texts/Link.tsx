import React from "react";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import { LinkProps } from "@mui/material/Link";

// quiero usar los estilos predefinidos de MuiLink, pero la funcionalidad de NextLink
// https://stackoverflow.com/questions/66226576/using-the-material-ui-link-component-with-the-next-js-link-component/74419666#74419666

interface Props extends LinkProps {
  href: string;
  children: React.ReactNode;
}

// utilizando la sintaxis ...rest, permito añadir las props adicionales de TypographyProps
export default function Link({ href, children, ...rest }: Props) {
  return (
    <MuiLink component={NextLink} href={href} {...rest}>
      {children}
    </MuiLink>
  );
}
