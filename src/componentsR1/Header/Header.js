import { Box } from "@mui/material";
import * as React from "react";
import logo from "../../asstes/images/logo.jpeg";
import WiMetrixLogo from "../../asstes/images/Wimetrix logo.jpeg";

export default function Header({LineDescription}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: 'wrap',
        marginBottom:"15px",
      }}
    >
      <img style={{width:"60px"}} src={logo} alt="" />
      <h2 style ={{margin:"7px 0"}}>{LineDescription} - Quality Dashboard</h2>
      <img style={{width:"125px"}} src={WiMetrixLogo} alt="" />
    </Box>
  );
}
