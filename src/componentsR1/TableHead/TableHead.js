import { TableCell, TableRow } from "@mui/material";
import React from "react";

export default function TableHeadData({ heads }) {
  return (
    <TableRow >
      <TableCell align="center">
        <small style={{ color: "black" }}>Today Date</small>
        <h4 style={{ margin: 0 }}>{new Date(Date.now()).toLocaleDateString()}</h4>
      </TableCell>

      {heads.map((item) => (
        <TableCell key={item} sx={{ border: 2, borderColor: "orange" }} align="center">
          {item}
        </TableCell>
      ))}
    </TableRow>
  );
}
