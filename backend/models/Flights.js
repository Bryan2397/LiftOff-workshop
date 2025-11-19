import mongoose from "mongoose";

const stopInfoSchema = new mongoose.Schema({
  code: { type: String, required: true },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  durationMin: { type: Number, required: true }
});

const FlightSchema = new mongoose.Schema({
    //add this after we have the seller UI set up
    sellerId: {type: mongoose.Schema.Types.ObjectId, ref: "Seller", required: true},
    
    flightNumber: {type: String, required: true},
    airline: { type: String, required: true },
    seatsBooked: {type: Number, required: true},
    description: {type: String, required: true},
    amenities : {
    wifi: { type: Boolean, default: false },
    meals: { type: Boolean, default: false },
    entertainment: { type: Boolean, default: false },
    chargingPorts: { type: Boolean, default: false }
    },
    stopInfo: [stopInfoSchema],
    status: { type: String, enum: ['scheduled', 'cancelled', 'completed'], default: 'scheduled' },
    departureTime: {type: Date, required: true},
    arrivalTime: {type: Date, required: true},
    price: {type: Number, required: true},
    seatsAvailable: {type: Number, required: true}, 

    from: {type: String, required: true},
    airportFrom: {type: String, required: true},
    addressFrom: {type: String, required: true},
    terminalFrom: {type: String, required: true},
    gateFrom: {type: String, required: true},


    to: {type: String, required: true},
    airportTo: {type: String, required: true},
    AddressTo: {type: String, required: true},
    terminalTo: {type: String, required: true},
    gateTo: {type: String, required: true},
    rating: {type: String, required: true},
    stops: {type: Number, required: true},
    carryOnBagsAllowed: {type: Number, required: true},
    carryOnWeightLimitKg: {type: Number, required: true},
    personalItemAllowed: { type: Boolean, default: false},
    checkedBagsAllowed: {type: Number, required: true},
    checkedBagWeightLimitKg: {type: Number, required: true},
    extraBagFeeUSD: {type: Number, required: true},
    aircraftModel: {type: String, required: true},
    aircraftCode: {type: String, required: true},
    aircraftAgeYears: {type: Number, required: true},
    aircraftCapacity: {type: Number, required: true},
    seatLayout: {type: String, required: true},
    seatPitch: {type: String, required: true},
    seatWidth: {type: String, required: true},
    hasUSBOutlets: { type: Boolean, default: false},
    hasPowerOutlets: { type: Boolean, default: false},
    hasLiveTV: { type: Boolean, default: false},

},
{ timestamps: true });
const Flight = mongoose.model("Flight", FlightSchema);

export default Flight;
