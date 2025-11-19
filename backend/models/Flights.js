import mongoose from "mongoose";

const stopInfoSchema = new mongoose.Schema({
  code: { type: String, required: true },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  durationMin: { type: Number, required: true }
});

const amenitiesSchema = new mongoose.Schema({
  wifi: { type: Boolean, default: false },
  meals: { type: Boolean, default: false },
  entertainment: { type: Boolean, default: false },
  chargingPorts: { type: Boolean, default: false }
});

const flightsSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Seller", required: true },
  
  flightNumber: { type: String, required: true },
  airline: { type: String, required: true },
  description: { type: String, required: true },
  seatsBooked: { type: Number, default: 0 },
  seatsAvailable: { type: Number, required: true },
  
  origin: {
    city: { type: String, required: true },
    airportName: { type: String, required: true },
    country: { type: String, required: true },
    iataCode: { type: String, required: true },
    terminal: { type: String },
    gate: { type: String },
    fullAddress: { type: String }
  },
  
  destination: {
    city: { type: String, required: true },
    airportName: { type: String, required: true },
    country: { type: String, required: true },
    iataCode: { type: String, required: true },
    terminal: { type: String },
    gate: { type: String },
    fullAddress: { type: String }
  },
  
  departureTime: { type: Date, required: true },
  arrivalTime: { type: Date, required: true },
  departureTimeLocal: { type: String },
  arrivalTimeLocal: { type: String },
  durationMin: { type: Number },
  timezoneChange: { type: String },
  departureTimezone: { type: String },
  arrivalTimezone: { type: String },
  
  carryOnBagsAllowed: { type: Number, default: 1 },
  carryOnWeightLimitKg: { type: Number },
  personalItemAllowed: { type: Boolean, default: true },
  checkedBagsAllowed: { type: Number, default: 0 },
  checkedBagWeightLimitKg: { type: Number },
  extraBagFeeUSD: { type: Number },

  aircraftModel: { type: String },
  aircraftCode: { type: String },
  aircraftAgeYears: { type: Number },
  aircraftCapacity: { type: Number },
  seatLayout: { type: String },
  seatPitch: { type: String },
  seatWidth: { type: String },
  hasUSBOutlets: { type: Boolean, default: false },
  hasPowerOutlets: { type: Boolean, default: false },
  hasLiveTV: { type: Boolean, default: false },

  onTimePercentage: { type: Number },
  averageDelayMin: { type: Number },
  cancellationRate: { type: Number },
  weatherDelayRiskScore: { type: Number },
  safetyScore: { type: Number },
  rating: { type: Number },

  amenities: { type: amenitiesSchema },

  price: { type: Number, required: true },
  stops: { type: Number, default: 0 },
  stopInfo: [stopInfoSchema],

  status: { type: String, enum: ["scheduled", "cancelled", "completed"], default: "scheduled" },
  date: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model("Flight", flightsSchema);

