// Import necessary dependencies from React and React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import pages (components for each route)
import Login from "./pages/LoginPage";
import UserInfoPage from "./pages/UserInfoPage";
import Navbar from "./components/Navbar";
import Support from "./pages/Support";
import Airline from "./pages/Airline";
import Settings from "./pages/Settings";
import AddFlight from "./pages/AddFlight";
import AirlineSignup from "./pages/AirlineSignUp";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import FlightDetail from "./components/FlightDetail";
import PaymentPage from "./pages/PaymentPage";
import Admin from "./pages/Admin";
import UserContext from "./UserContext";
import { useContext, useState } from "react";
import Unauthorized from "./pages/Unauthorized";
import MyFlights from "./pages/MyFlights";

function App() {
  const { role } = useContext(UserContext);
  
  return (
    <div>
    <Toaster />
    {/* // Router wraps the entire application to enable routing */}
    <Router>
      <Navbar />
      <Routes>
        <Route path="/admin" element={role == "admin" ? <Admin /> : <Unauthorized />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/flight/:id" element={<FlightDetail />} />
        <Route path="/airlineSignup" element={<AirlineSignup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/addflight" element={role === "seller" || role === "admin" ? <AddFlight /> : <Unauthorized />} />
        <Route path="myflights" element={role === "seller" || role === "admin" ? <MyFlights /> : <Unauthorized />} />
        <Route path="/infopage" element={role === "passenger" ? <UserInfoPage /> : <Unauthorized />} />
        <Route path="/support" element={<Support />} />
        <Route path="/airline" element={role === "seller" || role === "admin" ? <Airline /> : <Unauthorized />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
    </div>
  );
} 

// Export App so it can be used in index.js
export default App;



