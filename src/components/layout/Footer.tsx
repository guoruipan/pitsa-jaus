import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InstagramIcon from "#/components/icons/InstagramIcon";
import FacebookIcon from "#/components/icons/FacebookIcon";
import Link from "#/components/texts/Link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Grid
      container
      component="footer"
      spacing={2}
      sx={{
        bgcolor: "primary.main",
        p: "1.5rem",
        color: "primary.contrastText",
        textAlign: "center",
      }}
    >
      <Grid item xs={12}>
        <Typography variant="body1">
          &copy; {currentYear} - Todos los derechos reservados.
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link
          variant="body1"
          color="inherit"
          href="/privacy-policy"
          underline="hover"
        >
          Política de privacidad
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link
          variant="body1"
          color="inherit"
          href="/terms-and-conditions"
          underline="hover"
        >
          Términos y condiciones
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <InstagramIcon />
        <FacebookIcon />
      </Grid>
    </Grid>
  );
}
