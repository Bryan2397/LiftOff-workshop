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


function App() {
  return (
    <div>
    
    {/* // Router wraps the entire application to enable routing */}
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/airlineSignup" element={<AirlineSignup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/addflight" element={<AddFlight />} />
        <Route path="/infopage" element={<UserInfoPage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/airline" element={<Airline />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
    </div>
  );
} 

// Export App so it can be used in index.js
export default App;



