import React, { useEffect } from "react";
import DashboardCard from "../components/DashboardCard";
import { Line } from "react-chartjs-2";
// import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import faker from "faker";
import Table from "../components/Table";


const headCellData = [
  {
      title: "#", accessor: "number"
  },
  {
      title: 'Name', accessor: 'name', 
  },
  {
      title: 'Email', accessor: 'email',
  },
  {
      title: "Location", accessor: "location"
  },
  {
      title: "last login", accessor: "lastLogin"
  }
 
]
const bodyCellData = [
  {
      number: 1,
      name: "Nii Doe",
      email: "Nii@gmail.com",
      location: "Kumasi",
      lastLogin: "2hrs ago"

  },
  {
      number: 2,
      name: "Naa Doe",
      email: "naa@gmail.com",
      location: "Accra",
      lastLogin: "1hr ago"
  }
];


export default function Customers() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <div>
        <DashboardCard />
      </div>

      <strong>
        <h1 className="m-6">Customer List</h1>
      </strong>
      <div className="overflow-y-auto mt-6 max-h-96">
        <Table columns = {headCellData}  data = {bodyCellData}/>
        {/* <table className="table table-auto shadow min-w-full">
          <thead className="sticky top-0 bg-slate-500">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Item</th>
            </tr>
          </thead>
          <tbody>
           
         
            <tr>
              <th>6</th>
              <td>Irma Vasilik</td>
              <td>Editor</td>
              <td>Venezuela</td>
              <td>12/8/2020</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Meghann Durtnal</td>
              <td>Staff Accountant IV</td>
              <td>Philippines</td>
              <td>2/17/2021</td>
              <td>Yellow</td>
            </tr>
            <tr>
              <th>8</th>
              <td>Sammy Seston</td>
              <td>Accountant I</td>
              <td>Indonesia</td>
              <td>5/23/2020</td>
              <td>Crimson</td>
            </tr>
            <tr>
              <th>9</th>
              <td>Lesya Tinham</td>
              <td>Safety Technician IV</td>
              <td>Philippines</td>
              <td>2/21/2021</td>
              <td>Maroon</td>
            </tr>
            <tr>
              <th>10</th>
              <td>Zaneta Tewkesbury</td>
              <td>Sauer LLC</td>
              <td>Chad</td>
              <td>6/23/2020</td>
              <td>Green</td>
            </tr>
            
          </tbody>
        </table> */}
      </div>

      <div className="bg-white p-4 shadow-md mt-6">
        <h2 className="text-lg font-semibold mb-2">New Customers</h2>
        <Line data={data} options={options} />
      </div>
    </>
  );
}
