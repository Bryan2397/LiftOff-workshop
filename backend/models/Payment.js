import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking" },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["credit_card"], default: "credit_card" },
    PaymentStatus: { type: String, enum:["paid", "refunded"] },

},
{ timestamps: true });

const Payment = mongoose.Schema("Payment", PaymentSchema);

export default Payment;