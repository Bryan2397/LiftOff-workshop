import mongoose from "mongoose";

const BookingSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    flightId: {type: mongoose.Schema.Types.ObjectId, ref: "Flight", required: true},
    price: {type: Number, required: true},
    checkInCode: {type: String, required: true},
    bookingDate: {type: Date, required: true},
    status: {type: String, enum: ["pending", "confirmed", "cancelled", "delayed"], required: true},
},
{ timestamps: true });

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
