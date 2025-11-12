import dotenv from "dotenv"; // Load environment variables from .env file

import express from "express"; 
import { connectDB } from "./lib/db.js"
import cors from "cors"; //Middleware to allow cross-origin requests
import userRoutes from "./routes/userRoutes.js";
import flightRoutes from "./routes/flightRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";

dotenv.config();
const app = express();

//Middleware
app.use(cors()); //Enable CORS (Cross-Origin Resource Sharing) so frontend can communicate with backend
app.use(express.json()); //Parse incoming JSON requests and put the parsed data in req.body





app.use('/api/users', userRoutes);
app.use('/api/flights', flightRoutes);
app.use("/api/sellers", sellerRoutes);

//start server
const PORT = process.env.PORT || 5000; //Use port from environment or default to 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});