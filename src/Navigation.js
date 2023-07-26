import { Outlet, Link } from "react-router-dom";

import Dashboard from "./dashboard";
import Sightseeing from "./Sightseeing";
import IntakeForm from "./IntakeForm";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
            <Link to="/intakeForm" className="router">New Trip</Link>
          <br />
          <Link to="/dashboard" className="router">Dashboard</Link>
          <br />
          <Link to="/sightseeing" className="router">Gallery</Link>
            </ul>
        </nav>
        </>
    )
};

export default Layout;