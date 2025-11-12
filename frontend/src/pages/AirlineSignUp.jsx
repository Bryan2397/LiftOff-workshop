import { useState } from "react"; 
import { Link } from "react-router-dom"; //Used for navigation between login and signup
import axios from "axios"; //HTTP client for making requests/API calls to backend
import "./UserInfoPage.css";

const AirlineSignup = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  //Function to toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  // State to hold form input data
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

    // Function to update formData when input changes
    const handleChange = (e) => { 

      // Spread the old values, update only the one that changed
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser refresh on form submit

    try{
      // Make POST request to backend API to register user
      console.log(formData);
        const res = await axios.post('http://localhost:5000/api/users/register', formData);
        
        alert("Form submitted!"); // Confirmation for user
        console.log("Saved user: ", res.data); // Log the response from backend
    }catch(err){
      // Catch and log any errors
        console.error("Error saving user: ", err);
        alert("Error submitting form");
    }
  };
  
    return (
    <div className="login-container">
        <div className="login-card">
            <h2>LiftOff</h2>
            <p>Sign up here</p>

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input type="checkbox" id="showPassword" onChange={togglePassword} />
                    <label htmlFor="showPassword">Show Password</label>
                </div>

                <button type="submit" className="submit-button">Sign Up</button>
                <p>Already have an account? <Link to="/Login">Log in here</Link></p>
            </form>
        </div>
    </div>
  );

};

export default AirlineSignup;