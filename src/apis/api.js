import axios from "axios";

export const fetchData = async (lineId) => {
    const res = await axios.get(`http://172.16.20.1:4000/getReport1/${lineId}`)
    return res
}

export const getData = async (lineId) => {
    const result = await axios.get(`http://172.16.20.1:4000/getReport2/${lineId}`);
    return result;
  };
  