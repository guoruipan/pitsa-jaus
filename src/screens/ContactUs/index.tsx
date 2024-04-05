'use client';

import H1 from "#/components/ui/H1";
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import CheckIcon from "@mui/icons-material/Check";
import ListItemText from "@mui/material/ListItemText";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactScreen({pageTitle} : {pageTitle : string}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // TODO enviar correo
  };

  return (
    <>
      <Stack spacing={2}>
        <H1 sx={{ textAlign: "center" }}>{pageTitle}</H1>
        <Typography variant="body1">
          En PitsaJaus, valoramos enormemente los comentarios de nuestros
          clientes, ya que son una fuente invaluable de retroalimentación que
          nos ayuda a mejorar continuamente nuestro servicio. Para comunicarte
          con nosotros, te ofrecemos varias opciones:
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
          <ListItem>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText>
              <strong>Formulario de Contacto:</strong>
              También te invitamos a utilizar nuestro formulario de contacto en
              línea, que encontrarás a continuación.
            </ListItemText>
          </ListItem>
        </List>
      </Stack>
    </>
  );
}
