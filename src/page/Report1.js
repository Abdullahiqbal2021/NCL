import React from 'react'
import Header from '../componentsR1/Header/Header';
import Table from "../componentsR1/Table/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchData } from '../apis/api';
import spinner from '../asstes/images/spinner.svg'


export default function Report1() {
    const searchParams = new URLSearchParams(window.location.search);
    const lineId = searchParams.get("lineid");
    const [data, setData] = React.useState()

    const mounted = React.useRef(false);
    function customSort(a, b) {
        const order = ['STATION QC 1', 'STATION QC 2', 'ENDLINE QC INSIDE', 'ENDLINE QC OUTSIDE', 'FINISHING QUALITY CHECK'];
        return order.indexOf(a.SectionDescription) - order.indexOf(b.SectionDescription);
    }
    React.useEffect(() => {
        const getData = async () => {
            const res = await fetchData(lineId)

            const sorted = res.data.sort(customSort);
            console.log(sorted);
            setData(sorted);
        }
        if (lineId) {
            getData();
        } else {
            if (!mounted.current) {
                toast.warn("Please select LineId", {
                    position: "top-right",
                    autoClose: 9000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }

        const interval = window.setInterval(() => {
            getData();
            console.log("again fetching data");
        }, 120000);

        return () => mounted.current = true;
    }, [lineId])

    return (
        <div>
            {data ?
                <>
                    <Header LineDescription={data[0].LineDescription} />
                    <Table data={data} />
                </>
                :
                <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <img style={{ margin: "20px auto" }} src={spinner} alt=" Loading..." />
                </div>
            }
            <ToastContainer />
        </div>
    )
}
