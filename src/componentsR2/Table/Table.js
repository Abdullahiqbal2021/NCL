import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

export default function BasicTable({ data }) {
  return (
    <TableContainer component={Paper} style={{height:"79px"}}>
      <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
        <TableHead sx={{ background: "orange",padding:"0px" }}>
          <TableRow>
            <TableCell>CutQty</TableCell>
            <TableCell align="right">SewFirstOp</TableCell>
            <TableCell align="right">SewingQCPassQty</TableCell>
            <TableCell align="right">SewLastOp</TableCell>
            <TableCell align="right">FinishingFirstOp</TableCell>
            <TableCell align="right">FinPassQty</TableCell>
            <TableCell align="right">FinishingLastOp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell scope="row">{data.CutQty || "0"}</TableCell>
            <TableCell align="right">{data.SewFirstOp || "0"}</TableCell>
            <TableCell align="right">{data.SewingQCPassQty || "0"}</TableCell>
            <TableCell align="right">{data.SewLastOp || "0"}</TableCell>
            <TableCell align="right">{data.FinishingFirstOp || "0"}</TableCell>
            <TableCell align="right">{data.FinishinLastOp2 || "0"}</TableCell>
            <TableCell align="right">{data.FinishinLastOp || "0"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
