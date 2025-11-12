import express from "express";
import { addFlight, deleteFlight, updateFlight, findFlights, viewFlight, airlineFlights } from "../controllers/flightController.js";

const router = express.Router();

router.post("/", addFlight);
router.put("/:id", updateFlight);
router.delete("/:id", deleteFlight);
router.get("/", findFlights);
router.get("/:id", viewFlight);
router.get("/airline", airlineFlights);

export default router;