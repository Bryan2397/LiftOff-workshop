import mongoose from "mongoose";

//connect to the DB with the environment variable from .env
export const connectDB = async () =>{
    try {
        // console.log("Testing so far",process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected`);
    }catch (error){
        console.log(`MongoDB connection error: `, error);
    }
};
export default connectDB;