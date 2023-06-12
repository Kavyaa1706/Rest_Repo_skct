import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            AirLine Booking.com
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="kal"to='/pages/Home'>
          Home
          </Link>
          <Link className="abt"to='/Abt'>
            About
          </Link>
          <Link className="fli" to='/Login'>
            Flights
          </Link>
          <Link className="lgn" to="/Register" >
            Login/Signup
          </Link>
          <Link className="btn btn-outline-light" to="/adduser">
            Add Passenger
          </Link>
        </div>
      </nav>
    </div>
  );
}
