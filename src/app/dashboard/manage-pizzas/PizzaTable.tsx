import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { list as listPizzas } from "#/models/pizza";
import { formatCurrency, getPizzaPhoto } from "#/lib/utils";
import Image from "next/image";
import PizzaOptions from "./PizzaOptions";

interface Props {
  query?: string;
  currentPage: number;
}

export default async function PizzaTable({ query, currentPage }: Props) {
  const pizzas = await listPizzas(query, currentPage);

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} aria-label="Tabla de pizzas">
        <TableHead>
          <TableRow>
            <TableCell>Foto</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pizzas.map((pizza) => (
            <TableRow
              key={pizza.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Image
                  src={getPizzaPhoto(pizza)}
                  height={50}
                  width={50}
                  alt={`Imagen de ${pizza.name}`}
                  style={{ borderRadius: "0.5rem" }}
                />
              </TableCell>
              <TableCell>{pizza.name}</TableCell>
              <TableCell>{pizza.description}</TableCell>
              <TableCell align="right">{formatCurrency(pizza.price)}</TableCell>
              <TableCell align="right">
                <PizzaOptions pizza={pizza} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
