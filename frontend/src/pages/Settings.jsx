import React, { useState } from "react";
import "./UserInfoPage.css";



function Settings() {
  return (
    <div className="user-page">
      <div className="user-header">
        <h1>Settings ⚙️</h1>
        <p>Manage your airline account and preferences.</p>
      </div>

      <div className="user-content">
        <h2 className="section-title">Account Info</h2>
        <form className="support-form">
          <input type="text" placeholder="Airline Name" />
          <input type="email" placeholder="Contact Email" />
          <input type="text" placeholder="Support Phone" />
          <button>Save Changes</button>
        </form>

        <h2 className="section-title" style={{ marginTop: "2rem" }}>
          Security
        </h2>
        <form className="support-form">
          <input type="password" placeholder="Current Password" />
          <input type="password" placeholder="New Password" />
          <button>Update Password</button>
        </form>
        
        <form className="logout-form">
            <button>Logout</button>
        </form>
        
      </div>
    </div>
  );
}

export default Settings;