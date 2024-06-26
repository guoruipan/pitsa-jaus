import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { list as listStores } from "#/models/store";

interface Props {
  query?: string;
  currentPage: number;
}

export default async function StoreTable({ query, currentPage }: Props) {
  const stores = await listStores(query, currentPage);

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} aria-label="Tabla de tiendas">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Dirección</TableCell>
            <TableCell>Ciudad</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell align="right">Código Postal</TableCell>
            <TableCell align="right">Número de teléfono</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stores.map((store) => (
            <TableRow
              key={store.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {store.name}
              </TableCell>
              <TableCell>{store.address}</TableCell>
              <TableCell>{store.city}</TableCell>
              <TableCell>{store.state}</TableCell>
              <TableCell align="right">{store.postcode}</TableCell>
              <TableCell align="right">{store.phone_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
