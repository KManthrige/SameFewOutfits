// import { useEffect } from "react";
import * as React from "react";
// import * as ReactDOM from "react-DOM/client";
// import {
//   createBrowweRouter,
//   RouterProvider,
// } from "react-router-dom";

import Dashboard from "./Dashboard";
import Sightseeing from "./Sightseeing";
import IntakeForm from "./IntakeForm";

// const router = createBrowweRouter ([
//   {
//     path: "/",
//     element: <div>Hello World</div>

//   }
// ])
export default function App() {

  // useEffect(() => {
  //   getDestinationsData()
  // }, [])

  const getAPI = async () => {
    try {
      const response = await fetch("/api")
      const data = await response.json()
      console.log("data", data)
    } catch (error) {
      console.log("Error Fetching Data", error)
    }
  }

  return (
    <>
      <div>Same Few Outfits</div>
      <button onClick={getAPI}>get data</button>
      <Dashboard/>
      <Sightseeing/>
      <IntakeForm/>
      <table>
        <thead>
          <tr>
            <th>Destination</th>
            <th>Sights Explored</th>
            <th>Picture</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>

    </>
  );
}

