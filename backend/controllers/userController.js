import User from '../models/Users.js';
import bcrypt from "bcryptjs";
import { generateToken } from '../lib/utils.js';

//Register new user and hash password in the mongoDB 
export const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password, role } = req.body;
        console.log(req.body);

        // Basic validation
        if(!firstname || !lastname || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists'});
        }
        
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            // password: hashedPassword,
            role: role,
        });

        if(newUser){
            generateToken(newUser._id, newUser.role, res);
            await newUser.save();

            res.status(201).json({
                _id:newUser._id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                email: newUser.email,
                role: newUser.role,
            });

        }else{
            res.status(400).json({ message: "Invalid user data"});
        }

        console.log("User registered: ", newUser);
    }catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

//Login user and create a jwt to store the role and _id
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        //find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Invalid credentials' });
        }

        const passwordCorrect = await bcrypt.compare(password, user.password);
        if(!passwordCorrect){
            return res.status(404).json({ message: "Invalid credentials"});
        }
        generateToken(user._id, user.role, res);

        res.status(200).json({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            role:user.role,
        })

    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// clear their cookie and end their autentication
export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({message: "Logged out Successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



