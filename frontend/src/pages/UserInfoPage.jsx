import React, { useState } from "react";
import "./UserInfoPage.css";

function UserInfoPage() {
  const [tab, setTab] = useState("flights");

  return (
    <div className="user-page">
      {/* Header */}
      <div className="user-header">
        <h1>Your Flight Dashboard</h1>
        <p>Welcome back, traveler ✈️</p>
      </div>

      {/* Tabs */}
      <div className="user-tabs">
        {["flights", "points"].map((name) => (
          <button
            key={name}
            onClick={() => setTab(name)}
            className={`tab-btn ${tab === name ? "active" : ""}`}
          >
            {name === "flights" && "Flight History"}
            {name === "points" && "Points"}
            {/* {name === "support" && "Customer Support"} */}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="user-content">
        {tab === "flights" && <FlightHistory />}
        {tab === "points" && <Points />}
      </div>
    </div>
  );
}

// 🛫 Flight History Tab
function FlightHistory() {
  const flights = [
    { id: 1, from: "New York (JFK)", to: "Los Angeles (LAX)", date: "2025-10-05" },
    { id: 2, from: "Boston (BOS)", to: "Chicago (ORD)", date: "2025-09-22" },
  ];

  return (
    <div>
      <h2 className="section-title">Recent Flights</h2>
      <ul className="flight-list">
        {flights.map((f) => (
          <li key={f.id} className="flight-item">
            <div>
              <p className="flight-route">{f.from} → {f.to}</p>
              <p className="flight-date">{f.date}</p>
            </div>
            <span className="flight-status">Completed</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 💎 Points Tab
function Points() {
  const points = 8200;
  const nextReward = 10000;

  return (
    <div>
      <h2 className="section-title">Your Rewards</h2>
      <p className="points-text">
        Total Points: <span className="highlight">{points}</span>
      </p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(points / nextReward) * 100}%` }}
        ></div>
      </div>
      <p className="points-subtext">
        {nextReward - points} points to your next flight upgrade!
      </p>
    </div>
  );
}


export default UserInfoPage;