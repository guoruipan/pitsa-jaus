import React from "react";
import {
  Skeleton,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

interface Props {
  rows?: number;
  cols?: number;
}

export default function TableSkeleton({ rows = 5, cols = 5 }: Props) {
  return (
    <TableContainer component={Paper} elevation={6}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {Array.from({ length: cols }).map((_, k) => (
              <TableCell key={k}>
                <Skeleton variant="text" />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: rows }).map((_, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Array.from({ length: cols }).map((_, j) => (
                <TableCell key={j}>
                  <Skeleton variant="text" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
