// import { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import Dashboard from "./Dashboard";
import Sightseeing from "./Sightseeing";
import IntakeForm from "./IntakeForm";

export default function App() {

  // useEffect(() => {
  //   getDestinationsData()
  // }, [])


  return (
    <>
      <div>
        <div>Same Few Outfits</div>

      </div>
      <nav>
        <ul>
          <Link to="/intakeForm">Submit New</Link>
          <br />
          <Link to="/dashboard">Snapshot</Link>
          <br />
          <Link to="/sightseeing">Sightseeing</Link>
        </ul>
      </nav>
      <Routes>

        <Route path="/intakeForm" element={<IntakeForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sightseeing" element={<Sightseeing />} />
        {/* <table>
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
        </table> */}
      </Routes>
    </>
  );
}

