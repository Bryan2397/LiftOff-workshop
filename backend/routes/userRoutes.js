// import express to create routes
import express from "express";

// import controller functions that handle the logic for each route
// registerUser -> handles user signup
// loginUser -> handles user login
import { registerUser, loginUser, logout } from "../controllers/userController.js";

// create a new router object
const router = express.Router();

// Define API routes:

// POST /api/users/register -> register a new user
router.post('/register', registerUser);

// POST /api/users/login -> login an existing user
router.post('/login', loginUser);

router.post('/logout', logout);



export default router;