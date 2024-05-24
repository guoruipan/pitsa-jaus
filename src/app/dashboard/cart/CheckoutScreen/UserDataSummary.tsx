import React from "react";
import H2 from "#/components/texts/H2";
import { AlertError } from "#/components/ui/Alert";
import { User } from "#/models/user";
import { List, ListItem, ListItemIcon, Stack } from "@mui/material";
import Link from "#/components/texts/Link";
import { ArrowRightAlt as ArrowRightAltIcon } from "@mui/icons-material";

export default function UserDataSummary({ user }: { user: User }) {
  const [address] = React.useState<string | undefined>(user.home_address);

  const data = [
    `Nombre: ${user.name}`,
    `Email: ${user.email}`,
    `Dirección de envío: ${address || "Sin especificar"}`,
  ];

  return (
    <Stack spacing={2}>
      <H2>Tus datos</H2>
      {!address && (
        <AlertError>
          Falta la dirección de domicilio. Cámbiala{" "}
          <Link href="/dashboard/my-account/edit-profile">aquí</Link>
        </AlertError>
      )}
      <List>
        {data.map((dataRow, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon>
                <ArrowRightAltIcon />
              </ListItemIcon>
              {dataRow}
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
