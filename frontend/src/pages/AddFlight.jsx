import { useState, useEffect } from "react"; 
// import "./UserInfoPage.css"; 
import "../signup.css"
import axios from "axios"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddFlight = () => {
  // sellerId: {type: mongoose.Schema.Types.ObjectId, ref: "Seller", required: true},
      
      // flightNumber: {type: String, required: true},
      // airline: { type: String, required: true },
      // seatsBooked: {type: Number, required: true},
      // description: {type: String, required: true},
      // origin: {type: String, required: true},
      // destination: {type: String, required: true},
      // status: { type: String, enum: ['scheduled', 'cancelled', 'completed'], default: 'scheduled' },
      // departureTime: {type: Date, required: true},
      // arrivalTime: {type: Date, required: true},
      // price: {type: Number, required: true},
      // seatsAvailable: {type: Number, required: true},
  
  // State to hold form input data
  const [flightData, setFlightData] = useState({
    sellerId: '',
    flightNumber: '',
    airline: '',
    seatsBooked: 0,
    description: '',
    origin: {
      city: '',
      airportName: '',
      country:'',
      iataCode: ''
    },
    destination: {
      city: '',
      airportName: '',
      country: '',
      iataCode: ''
    },
    status: 'scheduled',
    departureTime: '',
    arrivalTime: '',
    price: 0,
    seatsAvailable: 0
  });
  
  const navigate = useNavigate();

    

    const HandleOriginChange = (e) => {
      const {name, value} = e.target;
      setFlightData((prev) => ({
        ...prev,
        origin: {
          ...prev.origin,
          [name]: value
        }
      }));
    }


    const handleDestinationChange = (e) => {
      const {name, value} = e.target;
      setFlightData((prev) => ({
        ...prev,
        destination:{
          ...prev.destination,
        [name]: value
        }}));
        console.log(flightData);
    }
    // Function to update formData when input changes
    const handleChange = (e) => { 
      
      // Spread the old values, update only the one that changed
    setFlightData({ ...flightData, [e.target.name]: e.target.value });
  };


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser refresh on form submit

    try{
      // Make POST request to backend API to register user
        if(flightData.seatsAvailable <= 0 ){
            toast.error("All fields must be valid");
        }

        await axios.post('http://localhost:5000/api/flights/register', flightData);
        
        alert("Form submitted!"); 
        toast.success("Flight successfully created"); 
        navigate("/");
    }catch(err){
      // Catch and log any errors
        toast.error("Error creating Flight");
        alert("Error submitting form");
    }
  };

    useEffect(() => {
    console.log(flightData);
    }, [flightData]);

    

    return (

    <div className="login-container">
        <div className="login-card">
            <h2>Create Flights</h2>
            <p>Enter Flight Details</p>

            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                    type="text"
                    name="flightNumber"
                    placeholder="Enter Airline Initials"
                    value={flightData.flightNumber}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="airline"
                    placeholder="Airline"
                    value={flightData.airline}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="number"
                    name="seatsAvailable"
                    placeholder="Number of Seats"
                    value={flightData.seatsAvailable}
                    onChange={handleChange}
                    required
                    style={{height: '30px'}}
                    />
                </div>

                <h3>Origin Details</h3>
                <div className="form-group">
                    <input 
                    type="text"
                    name="city"
                    placeholder="Origin city"
                    value={flightData.origin.city}
                    onChange={HandleOriginChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="airportName"
                    placeholder="Airport Name"
                    value={flightData.origin.airportName}
                    onChange={HandleOriginChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={flightData.origin.country}
                    onChange={HandleOriginChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="iataCode"
                    placeholder="iataCode"
                    value={flightData.origin.iataCode}
                    onChange={HandleOriginChange}
                    required
                    />
                </div>

                <h3>Destination Details</h3>
                <div className="form-group">
                    <input 
                    type="text"
                    name="city"
                    placeholder="Origin city"
                    value={flightData.destination.city}
                    onChange={handleDestinationChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="airportName"
                    placeholder="Airport Name"
                    value={flightData.destination.airportName}
                    onChange={handleDestinationChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={flightData.destination.country}
                    onChange={handleDestinationChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="iataCode"
                    placeholder="iataCode"
                    value={flightData.destination.iataCode}
                    onChange={handleDestinationChange}
                    required
                    />
                </div>
                
                <div className="form-group">
                  <h4>Pick an Arrival Time</h4>
                    <input 
                    type="datetime-local"
                    name="arrivalTime"
                    placeholder="Arrival Time"
                    value={flightData.arrivalTime}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div className="form-group">
                  <h4>Pick a Departure Time</h4>
                    <input 
                    type="datetime-local"
                    name="departureTime"
                    placeholder="Departure Time"
                    value={flightData.departureTime}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={flightData.description}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={flightData.price}
                    onChange={handleChange}
                    required
                    style={{ height: '30px' }}
                    />
                </div>

                <p></p>

                <button type="submit" className="submit-button">Create Flight</button>
            </form>
        </div>
    </div>
  );

};

export default AddFlight;