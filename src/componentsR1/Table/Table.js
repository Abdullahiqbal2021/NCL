import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import "./Table.css";
import TableData from "../TableBody/TableRow";
import TableHeadData from "../TableHead/TableHead";
import "react-toastify/dist/ReactToastify.css";


const heads = [
  "Checked Qty",
  "Pass Qty",
  "Rework Pending",
  "Total Faulty Pcs",
  "Total Faults",
  "Rejected Qty",
];


export default function BasicTable({ data }) {
  // const searchParams = new URLSearchParams(window.location.search);
  // const lineId = searchParams.get("lineid");
  // const [data, setData] = React.useState()

  // const mounted = React.useRef(false);

  // React.useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetchData(lineId)
  //     setData(res.data);
  //   }
  //   if (lineId) {
  //     getData();
  //   } else {
  //     if (!mounted.current) {
  //       toast.warn("Please select LineId", {
  //         position: "top-right",
  //         autoClose: 9000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "dark",
  //       });
  //     }
  //   }
  //   return () => mounted.current = true;
  // }, [lineId])



  return (
    <>

      <TableContainer sx={{ boxShadow: "none" }} component={Paper}>

        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
          <TableHead >
            <TableHeadData heads={heads} />
          </TableHead>

          <TableBody>
            {data.map((item, index) => (
              <TableData key={index} data={item} />
            ))}
          </TableBody>
        </Table>

      </TableContainer >
    </>
  );


}
