import jwt from "jsonwebtoken";

export const generateToken = (userId, role, res) => {
    // create jwt token that will expire in 7 days

    const token = jwt.sign({userId, role}, process.env.JWT_SECRET,{
        expiresIn: "7d"
    });

    //send token to user in a http only cookie
    res.cookie("jwt", token, {
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
    return token;
} 