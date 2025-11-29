import { useState, useEffect } from "react"; 
// import "./UserInfoPage.css"; 
import "../signup.css"
import axios from "axios"; 
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddFlight = () => {
  // sellerId: {type: mongoose.Schema.Types.ObjectId, ref: "Seller", required: true},
      
  const { id } = useParams();
  console.log(id);

  const [stops, setStops] = useState([]);    
  const addStop = () => {
    setStops(prev => [
      ...prev,
      {address: '', fullName: '', durationMin: '', code: ''}
    ]);
  };
  useEffect(() => {
    console.log(stops);
  },[stops]);

  const updateStop = (index, field, value) => {
    setStops(prev => {
      const newStops = [...prev];
      newStops[index][field] = value;
      return newStops;
    })
  };


  // State to hold form input data
  // convert number fields from strings to number when we submit
  const [flightData, setFlightData] = useState({
    sellerId: id,
    flightNumber: '',
    airline: '',
    seatsBooked: "", // convert to num
    description: '',
    stopInfo: [],
    amenities: {
      wifi: false,
      meals: false,
      entertainment: false,
      charging: false,
    },

    status: 'scheduled',
    departureTime: '',
    arrivalTime: '',
    price: '', // convert to num 
    seatsAvailable: "",// convert to num

    from: '',
    airportFrom: '',
    addressFrom: '',
    terminalFrom: '',
    gateFrom: '',
    fromCode: '',

    to: '',
    airportTo: '',
    addressTo: '',
    terminalTo: '',
    gateTo: '',
    toCode: '',

    rating: '',
    stops: '', // convert to num

    carryOnBagsAllowed: '', // convert to num
    carryOnWeightLimitKg: '', // convert to num 
    personalItemAllowed: false,
    baggageClaim: '',
    checkedBagsAllowed: '', // convert to num
    checkedBagWeightLimitKg: '', // convert to num
    extraBagFeeUSD: '', // convert to num

    aircraftModel: '',
    aircraftCode: '',
    aircraftAgeYears: '', // convert to num

    seatLayout: '',
    seatPitch: '',
    seatWidth: '',

    hasUSBOutlets: false,
    hasPowerOutlets: false,
    hasLiveTV: false,
  });
  
  console.log(flightData);

  const navigate = useNavigate();


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


  const deleteStop = (e) => {
    const {id} = e.target; 
    console.log(id);
    setStops((prev) => {
      return prev.filter((stop, index) => {
        return index != id;
      })
    });
  };


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default browser refresh on form submit

    try{
      // Make POST request to backend API to register user
        

        await axios.post('http://localhost:5000/api/flights/', flightData);
        
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
    console.log(id);

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
                    placeholder="Enter Airline Initials with Number"
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
                    type="text"
                    name="price"
                    placeholder="Price"
                    value={flightData.price}
                    onChange={handleChange}
                    required
                    style={{ height: '30px' }}
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
                    type="text"
                    name="seatsAvailable"
                    placeholder="Number of Seats"
                    value={flightData.seatsAvailable}
                    onChange={handleChange}
                    required
                    style={{height: '30px'}}
                    />
                </div>

                <div className="form-group">
                  <h3>Pick an Arrival Time</h3>
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
                  <h3>Pick a Departure Time</h3>
                    <input 
                    type="datetime-local"
                    name="departureTime"
                    placeholder="Departure Time"
                    value={flightData.departureTime}
                    onChange={handleChange}
                    required
                    />
                </div>

                <h3>From Details</h3>
                <div className="form-group">
                    <input 
                    type="text"
                    name="from"
                    placeholder="From City"
                    value={flightData.from}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="addressFrom"
                    placeholder="From Address"
                    value={flightData.addressFrom}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="fromCode"
                    placeholder="From iata Code"
                    value={flightData.fromCode}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="airportFrom"
                    placeholder="From Airport"
                    value={flightData.airportFrom}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="gateFrom"
                    placeholder="Gate From"
                    value={flightData.gateFrom}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="terminalFrom"
                    placeholder="Terminal From"
                    value={flightData.terminalFrom}
                    onChange={handleChange}
                    required
                    />
                </div>

                <h3>To Details</h3>
                <div className="form-group">
                    <input 
                    type="text"
                    name="to"
                    placeholder="To City"
                    value={flightData.to}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="addressTo"
                    placeholder="To Address"
                    value={flightData.addressTo}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="toCode"
                    placeholder="To iata Code"
                    value={flightData.toCode}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="airportTo"
                    placeholder="From Airport"
                    value={flightData.airportTo}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="gateTo"
                    placeholder="Gate To"
                    value={flightData.gateFrom}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="terminalTo"
                    placeholder="Terminal To"
                    value={flightData.terminalTo}
                    onChange={handleChange}
                    required
                    />
                </div>

                <h3>Baggage Information</h3>
                <h4>Carry On</h4>
                <div className="form-group">
                    <input 
                    type="text"
                    name="carryOnBagsAllowed"
                    placeholder="Number of Carry on Bags allowed"
                    value={flightData.carryOnBagsAllowed}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="carryOnWeightLimitKg"
                    placeholder="carry On Weight Limit Kg"
                    value={flightData.carryOnWeightLimitKg}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                  <h4>Personal Items Allowed</h4>
                    <input 
                    type="checkbox"
                    name="personalItemAllowed"
                    placeholder="personal Item Allowed"
                    value={flightData.personalItemAllowed}
                    onChange={(e) => setFlightData(prev => ({ ...prev, personalItemAllowed: e.target.checked}))}
                    
                    />
                </div>

                <h4>Checked Bags</h4>
                <div className="form-group">
                    <input 
                    type="text"
                    name="checkedBagWeightLimitKg"
                    placeholder="checked Bag Weight Limit Kg"
                    value={flightData.checkedBagWeightLimitKg}
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div className="form-group">
                    <input 
                    type="text"
                    name="checkedBagsAllowed"
                    placeholder="checked Bags Allowed"
                    value={flightData.checkedBagsAllowed}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="extraBagFeeUSD"
                    placeholder="Extra Bag Fee"
                    value={flightData.extraBagFeeUSD}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="baggageClaim"
                    placeholder="Carousel # to get luggage"
                    value={flightData.baggageClaim}
                    onChange={handleChange}
                    required
                    />
                </div>

                <h3>Aircraft Information</h3>
                <div className="form-group">
                    <input 
                    type="text"
                    name="aircraftModel"
                    placeholder="aircraft Model"
                    value={flightData.aircraftModel}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="aircraftAgeYears"
                    placeholder="# of years aircraft has been in use"
                    value={flightData.aircraftAgeYears}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="aircraftCode"
                    placeholder="Code which represents your aircraft"
                    value={flightData.aircraftCode}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="seatLayout"
                    placeholder="3-3, 3-4-3"
                    value={flightData.seatLayout}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="seatPitch"
                    placeholder="seat Pitch inches"
                    value={flightData.seatPitch}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="seatWidth"
                    placeholder="Width of seats"
                    value={flightData.seatWidth}
                    onChange={handleChange}
                    required
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    name="rating"
                    placeholder="Rating"
                    value={flightData.rating}
                    onChange={handleChange}
                    required
                    />
                </div>

                <h3>Stops</h3>
                <button type="button" onClick={addStop} >Add Stop</button>

                {stops.map((stop, index) => (
            <div key={index} className="form-group">
              <h3>{`Stop #${index+1}`}</h3>
            <input 
            type="text"
            name="fullName"
            placeholder="Address Stop Airport"
            value={stop.fullName}
            onChange={e => updateStop(index, "fullName", e.target.value)}
            required
            />

              <input 
              type="text"
              name="address"
              placeholder="Stop full address, location, city, state"
              value={stop.address}
              onChange={e => updateStop(index, "address", e.target.value)}
              required
              />
        
            <input 
            type="text"
            name="code"
            placeholder="Address Stop iata Code"
            value={stop.code}
            onChange={e => updateStop(index, "code", e.target.value)}
            required
            />

            <input 
            type="text"
            name="durationMin"
            placeholder="total flight stop minutes"
            value={stop.durationMin}
            onChange={e => updateStop(index, "durationMin", e.target.value)}
            required
            />
            <button id={index} onClick={deleteStop} type="button" style={{height: "30px", marginTop: "20px"}}>Delete stop</button>
            </div>))}

                <button type="submit" className="submit-button">Create Flight</button>
            </form>
        </div>
    </div>
  );

};

export default AddFlight;
