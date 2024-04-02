import Box from "@mui/material/Box";
import { BoxProps } from "@mui/material/Box";

// la mayoría de componentes de MUI tienen sus propias interfaces de props para acceder a las props del componente

interface Props extends BoxProps {
  children: React.ReactNode,
  sxProps?: React.CSSProperties,
}

// como los elementos jsx no permiten props duplicadas, para añadir propiedades a sx tenemos que incluir sxProps por separado de ...rest
// NO HACER <Box sx={}>
// SÍ HACER <Box sxProps={}>

export default function VerticalSpacedBox ({ children, sxProps, ...rest }: Props) {
  /* "& > * + *": { marginTop: "0.75rem" } es un selector css que indica que los hijos de Box, excepto el primer elemento, tendrán un marginTop */
  /* con esto busco imitar la clase space-y-4 de tailwind css */
  return (
    <Box sx={{ "& > * + *": { marginTop: "0.75rem" }, ...sxProps }} {...rest} >
      {children}
    </Box>
  );
}