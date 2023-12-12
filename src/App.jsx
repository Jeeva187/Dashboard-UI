/** @format */

import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";

function App() {
  const [data, setData] = useState([
    {
      invoiceid: "#AHGA68",
      date: "09/23/2023",
      customer: "Jacob Marcus",
      payableamount: "$100",
      paidamount: "$000",
      due: "$000",
    },
    {
      invoiceid: "#AHGA68",
      date: "09/23/2023",
      customer: "Jacob Marcus",
      payableamount: "$100",
      paidamount: "$000",
      due: "$000",
    },
    {
      invoiceid: "#AHGA68",
      date: "09/23/2023",
      customer: "Jacob Marcus",
      payableamount: "$100",
      paidamount: "$000",
      due: "$000",
    },
    {
      invoiceid: "#AHGA68",
      date: "09/23/2023",
      customer: "Jacob Marcus",
      payableamount: "$100",
      paidamount: "$000",
      due: "$000",
    },
    {
      invoiceid: "#AHGA68",
      date: "09/23/2023",
      customer: "Jacob Marcus",
      payableamount: "$100",
      paidamount: "$000",
      due: "$000",
    },
    {
      invoiceid: "#AHGA68",
      date: "09/23/2023",
      customer: "Jacob Marcus",
      payableamount: "$100",
      paidamount: "$000",
      due: "$000",
    },
    {
      invoiceid: "#AHGA68",
      date: "09/23/2023",
      customer: "Jacob Marcus",
      payableamount: "$100",
      paidamount: "$000",
      due: "$000",
    },
    {
      invoiceid: "#AHGA68",
      date: "09/23/2023",
      customer: "Jacob Marcus",
      payableamount: "$100",
      paidamount: "$000",
      due: "$000",
    },
    {
      invoiceid: "#AHGA68",
      date: "09/23/2023",
      customer: "Jacob Marcus",
      payableamount: "$100",
      paidamount: "$000",
      due: "$000",
    },
  ]);

  return (
    <>
      <div className='container-fluid'>
        <div className='row content  '>
          <Sidebar />
          <Dashboard data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
