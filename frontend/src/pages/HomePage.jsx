import { useState } from "react";
import "./UserInfoPage.css";
import FlightCard from "../components/FlightCard";
import { ArrowLeftRight } from "lucide-react"; 

const HomePage = () => {
    const [flights, setFlights] = useState([]);
    const [searchOrigin, setSearchOrigin] = useState('');
    const [searchDestination, setSearchDestination] = useState('');

    const swap = (e) => {
        e.preventDefault();
        
        let temp = searchOrigin;
        setSearchOrigin(searchDestination);
        setSearchDestination(temp);
    }

  return (
    <div className="user-page">
      {/* Header */}
      <div className="user-header">
        <h1>Welcome to LiftOff</h1>
        <p>Find your next flight with ease.</p>
      </div>

      {/* Search Section */}
      <div className="user-content">
        <h2 className="section-title">Search Flights</h2>
        <form className="support-form" >
          <input
            type="text"
            name="searchOrigin"
            value={searchOrigin}
            placeholder="Enter Origin (e.g. JFK)"
            onChange={(e) => setSearchOrigin(e.target.value)}
          />
          <button style={{width: "50px"}} onClick={swap} >
            <ArrowLeftRight/>
          </button>
          
          <input
            type="text"
            name="searchDestination"
            value={searchDestination}
            placeholder="Enter Destination (e.g. LAX)"
            onChange={(e) => setSearchDestination(e.target.value)}
          />
          
          <button type="submit">Search</button>

        </form>

        {/* Create Flight card component*/}
        {flights.map((flight) => {
            <FlightCard key={flight._id} flight={flight} />
        })
        }
        <h1>HEY</h1>
      </div>

      

      {/* Footer */}
      <div className="user-content" style={{ textAlign: "center", marginTop: "2rem" }}>
        <p style={{ color: "#6b7280" }}>© 2025 LiftOff. All rights reserved.</p>
      </div>
    </div>
  );
}

export default HomePage;