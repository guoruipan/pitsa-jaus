import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface Column {
  name: string;
  accessor: string;
  align: "center" | "left" | "right" | "inherit" | "justify" | undefined;
}

// TODO uncomplete

interface Props {
  columns: Column[];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  data: { [key: string]: any }[]; // tipo de dato para objetos con claves dinámicas
}

export default function SimpleTable({ columns, data }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {columns.map((col) => {
              return (
                <TableCell key={col.accessor} align={col.align}>
                  {col.name}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col) => (
                <TableCell key={col.accessor} align={col.align}>
                  {row[col.accessor]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
