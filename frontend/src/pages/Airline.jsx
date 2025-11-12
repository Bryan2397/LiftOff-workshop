import React from "react";
import "./UserInfoPage.css"; // reuse the same style
import { Link } from "react-router-dom";

function Airline() {
  return (
    <div className="user-page">
      <div className="user-header">
        <h1>Welcome, Seller's ✈️</h1>
        <p>Manage your flights, view bookings, and keep your operations flying smoothly.</p>
      </div>

      <div className="user-content">
        <h2 className="section-title">Quick Actions</h2>
        <div className="user-tabs">
          <Link to={"/addflight"} style={{ textDecoration: 'none' }}>
          <button className="tab-btn">Add New Flight</button>
          </Link>

          <button className="tab-btn">View Bookings</button>
        </div>

        <h2 className="section-title">Today's Summary</h2>
        <ul className="flight-list">
          <li className="flight-item">
            <span className="flight-route">JFK → LAX</span>
            <span className="flight-status">On Time</span>
          </li>
          <li className="flight-item">
            <span className="flight-route">ATL → MIA</span>
            <span className="flight-status">Delayed</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Airline;

