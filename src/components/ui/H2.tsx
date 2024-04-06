import React from 'react';
import Typography from "@mui/material/Typography";
import { TypographyProps } from "@mui/material/Typography";

interface Props extends TypographyProps {
  children: React.ReactNode;
}

export default function H2({ children, ...rest }: Props) {
  return (
    <Typography variant="h4" component={"h2"} {...rest}>
      {children}
    </Typography>
  );
}
