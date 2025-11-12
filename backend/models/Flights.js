import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
    //add this after we have the seller UI set up
    sellerId: {type: mongoose.Schema.Types.ObjectId, ref: "Seller", required: true},
    
    flightNumber: {type: String, required: true},
    airline: { type: String, required: true },
    seatsBooked: {type: Number, required: true},
    description: {type: String, required: true},
    origin: {
    city: { type: String, required: true },
    airportName: { type: String, required: true },
    country: { type: String, required: true },
    iataCode: { type: String, required: true }
    },
    destination: {
    city: { type: String, required: true },
    airportName: { type: String, required: true },
    country: { type: String, required: true },
    iataCode: { type: String, required: true }
    },
    status: { type: String, enum: ['scheduled', 'cancelled', 'completed'], default: 'scheduled' },
    departureTime: {type: Date, required: true},
    arrivalTime: {type: Date, required: true},
    price: {type: Number, required: true},
    seatsAvailable: {type: Number, required: true},    
},
{ timestamps: true });
const Flight = mongoose.model("Flight", FlightSchema);

export default Flight;

