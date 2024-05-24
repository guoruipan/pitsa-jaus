import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { list as listUsers } from "#/models/user";
import { Chip } from "@mui/material";
import PendingChip from "./PendingChip";

interface Props {
  query?: string;
  currentPage: number;
}

const roles = {
  admin: "Administrador",
  manager: "Gerente",
  customer: "Cliente",
};

export default async function UserTable({ query, currentPage }: Props) {
  const users = await listUsers(query, currentPage);

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} aria-label="Tabla de usuarios">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Dirección</TableCell>
            <TableCell>Rol</TableCell>
            <TableCell align="right">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.home_address || "Sin especificar"}</TableCell>
              <TableCell>{roles[user.role]}</TableCell>
              <TableCell align="right">
                {user.status === "validated" ? (
                  <Chip label="Validado" color="success" />
                ) : (
                  <PendingChip user={user} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
