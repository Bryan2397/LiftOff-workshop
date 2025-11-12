import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    contactEmail: { type: String, required: true },
    iataCode: { type: String, required: true },
    country: { type: String, required: true },
    phoneNumber: { type: String, required: true},
    companyName: { type: String, required: true },
    password: { type: String, required: true },
    companyWebsite: { type: String, required: true },
    role: { type: String, enum: ['seller', 'admin'], default: 'seller' },
    // status: { type: String, enum: ['pending', 'approved', 'suspended'], default: 'pending' }

},
{ timestamps: true });

const Seller = mongoose.model("Seller", SellerSchema);

export default Seller;