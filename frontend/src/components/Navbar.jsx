// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">LiftOff</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => toggleDropdown("flights")}
          onMouseLeave={() => toggleDropdown(null)}
        >
          <span className="dropdown-title">Flights ▾</span>
          {openDropdown === "flights" && (
            <ul className="dropdown-menu">
              <li><Link to="/myflights">Manage Flights</Link></li>
              <li><Link to="/addflight">Add Flight</Link></li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => toggleDropdown("bookings")}
          onMouseLeave={() => toggleDropdown(null)}
        >
          <span className="dropdown-title">Bookings ▾</span>
          {openDropdown === "bookings" && (
            <ul className="dropdown-menu">
              <li><Link to="/bookings">View Bookings</Link></li>
              <li><Link to="/reports">Reports</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;