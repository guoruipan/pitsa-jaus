import Typography from "@mui/material/Typography";

// la propiedad sxProps añade estilos adicionales de CSS al componente. Esto hace su uso más flexible

interface Props {
    children : React.ReactNode,
    sxProps?: React.CSSProperties,
}

export default function PageTitle ({children, sxProps} : Props ) {
    return (
        <Typography variant="h2" component={"h1"} sx={{ ...sxProps }}>
          {children}
        </Typography>
    );

}