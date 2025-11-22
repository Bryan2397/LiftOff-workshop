import { useEffect, useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; //Used for navigation between login and signup
import axios from "axios"; //HTTP client for making requests/API calls to backend
import "./UserInfoPage.css";
import toast from "react-hot-toast";

const AirlineSignup = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  //Function to toggle password visibility
  const togglePassword = () => setShowPassword(!showPassword);

  // State to hold form input data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    companyName: '',
    country: '',
    phoneNumber: '',
    companyWebsite: '',
    contactEmail: '',
    role: "seller",
  });

  const navigate = useNavigate();

    // Function to update formData when input changes
    const handleChange = (e) => { 

      // Spread the old values, update only the one that changed
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(()=> {
    console.log(formData);
  },[formData]);


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser refresh on form submit

    try{
      // Make POST request to backend API to register user
      console.log(formData);
        const res = await axios.post('http://localhost:5000/api/sellers/register', formData);
        
        toast.success("Form submitted!"); // Confirmation for user
        navigate("/airline");
    }catch(err){
      // Catch and log any errors
        toast.error("Error submitting form");
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
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="email"
                    name="contactEmail"
                    placeholder="Contact Email"
                    value={formData.contactEmail}
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
                    <input 
                    type="text"
                    name="companyName"
                    placeholder="company Name"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    />
                </div>


                <div className="form-group">
                    <input 
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="phoneNumber"
                    placeholder="phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="companyWebsite"
                    placeholder="Company Website"
                    value={formData.companyWebsite}
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
