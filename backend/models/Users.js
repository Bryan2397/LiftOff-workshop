//Defines how data is structured and stored in the database for user information

import mongoose from "mongoose";

// Define the User schema (blueprint for user documents in MongoDB)
const userSchema = new mongoose.Schema({

    // First name of the user
    firstname: { type: String, required: true },

    // Last name of the user
    lastname: { type: String, required: true },

    // Ensure email is unique for each user
    email: { type: String, required: true, unique: true },

    // In a real application, passwords should be hashed before storing for security
    password: { type: String, required: true },

    role: {
        type: String,
        enum: ["passenger", "seller", "admin", "pending"],
        default: "passenger",
        required: true,
    },
}, 
//Add createdAt and updatedAt fields automatically
{ timestamps: true });

// Create the User model from the schema
// This model will be used to interact with the users collection in MongoDB
const User = mongoose.model("User", userSchema);

// Export the User model to be used in controllers and routes
export default User;