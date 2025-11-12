import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

// Middleware to protect routes that require authentication
export const protectRoute = async(req, res, next) =>{
    try {
        // When a user logs in or signs up, we stored their token in a cookie named "jwt"
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({ message: "Unauthorized - no Token Provided" });
        }

        //Verify the token using the same secret we used when creating it
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ message: "Unauthorized - Invalid Token" });
        }
        
        // `decoded.userId` is what we put inside the JWT when we generated it
        // `.select("-password")` means we don’t include the password field for safety
        const user = await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }
        
        // This makes `req.user` available to any route that uses this middleware
        req.user = user;
        next();

    } catch (error) {
        console.log("error in protectRoute middleware: ", error.message);
        res.status(400).json({message: "Invalid credentials"});        
    }
};

export const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        if(!req.user){
            return res.status(401).json({ message: "Unauthorized" });
        }

        if(!allowedRoles.includes(req.user)){
            return res.status(403).json({ message: "Access denied" });
        }
        
        next();
    }
};