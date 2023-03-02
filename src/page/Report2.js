import React, { useEffect, useRef, useState } from "react";
import { getData } from "../apis/api";
import ScanningReport from "../componentsR2/ScanningReport/ScanningReport";
import BasicTable from "../componentsR2/Table/Table";
import "react-toastify/dist/ReactToastify.css";
import spinner from "../asstes/images/spinner.svg";
import Header from "../componentsR2/Header/Header";

function Report2() {
  const searchParams = new URLSearchParams(window.location.search);
  const lineId = searchParams.get("lineid");
  const [data, setData] = useState();

  useEffect(() => {
    if (lineId) {
      fetchData();
    }
    const interval = window.setInterval(() => {
      fetchData();
      console.log("again fetching data of report 2");
    }, 120000);
  }, [lineId]);

  const fetchData = async () => {
    const res = await getData(lineId);
    const transformed = {
      ...res,
      data: {
        ...res.data,
        BarChart2: res.data.BarChart2.map(row => ({
          ...row,
          width: ((row.Production /
            (row.Production +
              Math.floor(Math.random() * 1501) +
              500)) *
            100) / 2,
          // width:"200px"
        })),
        BarChart1: res.data.BarChart1.map(row => ({
          ...row,
          width: ((row.Production /
            (row.Production +
              Math.floor(Math.random() * 1501) +
              400)) *
            100) / 2,
        }))
      }
    }
    setData(transformed);
    console.log("dataa", data);
  };
  return (
    <>
      {!data ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            paddingTop: "50px",
          }}
        >
          <img src={spinner} alt="Loading" />
        </div>
      ) : (
        <>
          <Header />
          <BasicTable data={data.data.object} />

          <div style={{ display: "flex", height: 'calc(100vh - 140px)' }}>
            <ScanningReport
              charts={data.data.BarChart1}
              LineCode={data.data.LineCode}
            />
            <ScanningReport
              charts={data.data.BarChart2}
              LineCode={data.data.LineCode}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Report2;
