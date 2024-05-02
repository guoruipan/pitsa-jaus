import React from "react";
import { Metadata } from "next";
import H1 from "#/components/texts/H1";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";
import ListItemText from "@mui/material/ListItemText";

const pageTitle = "Contáctanos";

export const metadata: Metadata = {
  title: pageTitle,
};

export default function Page() {
  return (
    <Stack spacing={3}>
      <H1 sx={{ textAlign: "center" }}>{pageTitle}</H1>
      <Typography variant="body1">
        En PitsaJaus, valoramos enormemente los comentarios de nuestros
        clientes, ya que son una fuente invaluable de retroalimentación que nos
        ayuda a mejorar continuamente nuestro servicio. Para comunicarte con
        nosotros, te ofrecemos varias opciones:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText>
            <strong>Línea de Atención al Cliente:</strong> Puedes ponerte en
            contacto con nuestro Servicio de Atención al Cliente llamando al
            número: 911 911 911 de lunes a viernes de 10:00 a 22:00 horas en
            días laborables.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText>
            <strong>Correo Electrónico:</strong> Si prefieres escribirnos, no
            dudes en enviarnos un mensaje a la siguiente dirección de correo
            electrónico: atencioncliente@pitsajaus.com
          </ListItemText>
        </ListItem>
      </List>
    </Stack>
  );
}
