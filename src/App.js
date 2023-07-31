// import { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import Dashboard from "./dashboard";
import Sightseeing from "./Sightseeing";
import IntakeForm from "./IntakeForm";
import './styles.css';

export default function App() {

    return (
    <>
      <div>
        <div className="title">Same Few Outfits</div>


      </div>
      <nav className="navigation">
        <ul className="links">
          <Link to="/" className="router">Dashboard</Link>
          <br />
          <Link to="/intakeForm" className="router">New Trip</Link>
          <br />
          <Link to="/sightseeing" className="router">Gallery</Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/intakeForm" element={<IntakeForm />} />
        <Route path="/sightseeing" element={<Sightseeing />} />
      </Routes>
    </>
  );
}

