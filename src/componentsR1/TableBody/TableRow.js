import { TableCell, TableRow } from "@mui/material";
import React from "react";

export default function TableData({ data }) {
  return (
    <TableRow key={data.id} >
      <TableCell
        sx={{
          border: 2,
          borderColor: "orange",
        }}
        component="th"
        scope="row"
        align="center"
      >
        {data.SectionDescription}
      </TableCell>
      <TableCell
        sx={{ border: 2, borderColor: "orange", borderBottom: 0 }}
        align="center"
      >
        {data.CheckedQty}
      </TableCell>
      <TableCell
        sx={{ border: 2, borderColor: "orange", borderBottom: 0 }}
        align="center"
      >
        {data.PassQty}
      </TableCell>
      <TableCell
        sx={{ border: 2, borderColor: "orange", borderBottom: 0 }}
        align="center"
      >
        {data.PendingRework}
      </TableCell>
      <TableCell
        sx={{ border: 2, borderColor: "orange", borderBottom: 0 }}
        align="center"
      >
        {data.Faulty_Pc}
      </TableCell>
      <TableCell
        sx={{ border: 2, borderColor: "orange", borderBottom: 0 }}
        align="center"
      >
        {data.TotalFaults}
      </TableCell>
      <TableCell
        sx={{
          border: 2,
          borderColor: "orange",
          borderBottom: 0,
          borderRight: 0,
        }}
        align="center"
      >
        {data.RejectedPcs}
      </TableCell>
    </TableRow>
  );
}
