import express from "express";
import { registerSeller, loginSeller, sellerProfile, sellerFlights, updateSeller } from "../controllers/sellerController.js";

const router = express.Router();

router.post("/register", registerSeller);
router.post("/login", loginSeller);
router.get("/profile", sellerProfile);
router.get("/:sellerId", sellerFlights);
router.put("/profile", updateSeller);

export default router;