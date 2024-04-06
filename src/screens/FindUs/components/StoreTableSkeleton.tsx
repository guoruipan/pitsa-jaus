import { Skeleton, Table, TableBody, TableRow, TableCell } from "@mui/material";

export default function StoreTableSkeleton() {
  return (
    <Table>
      <TableBody>
        {Array.from({ length: 6 }).map((_, i) => (
          <TableRow key={i}>
            {Array.from({ length: 6 }).map((_, j) => (
              <TableCell key={j}>
                <Skeleton variant="text" />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
