import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InstagramIcon from "#/components/icons/InstagramIcon";
import FacebookIcon from "#/components/icons/FacebookIcon";
import Link from "#/components/ui/Link";

/* footer (mt-auto), junto a 
  body (minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',) 
  empujan el footer al fondo */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Grid
      container
      component="footer"
      spacing={2}
      sx={{
        bgcolor: "primary.main",
        p: "1rem",
        color: "primary.contrastText",
        mt: "auto",
        textAlign: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="body1">
          &copy; {currentYear} - Todos los derechos reservados.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Link variant="body1" color="inherit" href="/privacy-policy">
          Política de privacidad
        </Link>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Link variant="body1" color="inherit" href="/terms-and-conditions">
          Términos y condiciones
        </Link>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Link variant="body1" color="inherit" href="/contact-us">
          Contáctanos
        </Link>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <InstagramIcon />
        <FacebookIcon />
      </Grid>
    </Grid>
  );
}
