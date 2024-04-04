import Typography from "@mui/material/Typography";
import { TypographyProps } from "@mui/material/Typography";

interface Props extends TypographyProps {
    children : React.ReactNode,
}

export default function PageTitle ({children, ...rest } : Props ) {
    return (
        <Typography variant="h2" component={"h1"} {...rest}>
          {children}
        </Typography>
    );

}

// TODO maybe just modify the base theme