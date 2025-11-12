import Flight from "../models/Flights.js";
import Seller from "../models/Sellers.js";

export const addFlight = async (req, res)=>{
    try{
        
        const { sellerId, flightNumber, price, arrivalTime, 
            description, departureTime, seatsAvailable,
            origin, destination, airline, seatsBooked,
            } = req.body; 
            
            console.log(req.body);

            if(!await Seller.findById(sellerId)){
                return res.status(404).json({ message: "Invalid input" });
            }

            if(!flightNumber || !price || !arrivalTime 
                || !seatsAvailable || !price){
                    return res.status(404).json({ message: "Invalid input" });
                }
        
        const newFlight = new Flight({
            sellerId: sellerId,
            flightNumber: flightNumber,
            airline: airline,
            price: price,
            arrivalTime: arrivalTime,
            departureTime: departureTime,
            origin: origin,
            destination: destination,
            seatsBooked: seatsBooked,
            seatsAvailable: seatsAvailable,
            description: description,
        });

        await newFlight.save();
        res.status(201).json({ message: "Flight successfully added" });
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: "Server Internal error" });
    }
};

export async function updateFlight(req, res){
    try {
        
        const updates = Object.fromEntries(
            Object.entries(req.body).filter(
            ([_, value]) => value != null && value !== ""));
        if(!updates){
            return res.status(404).json({ message: "Nothing was updated" });
        }
        const updatedFlight = await Flight.findByIdAndUpdate(req.params.id, updates, { new: true });
        console.log(updatedFlight);

        if(!updatedFlight){
            return res.status(404).json({ message: "Error in finding flight" });
        }

        res.status(200).json({ message: "flight updated Successfully" });
    } catch (error) {
        console.log("Flight not updated", error);
        res.status(500).json({ message: "Internal Server Error"});
    }
}

export async function deleteFlight(req, res){
 try {
    const deleteFlight = await Flight.findByIdAndDelete(req.params.id);
    
    if(!deleteFlight){
        return res.status(404).json({ message: "Can't find flight to delete" });
    }
    res.status(200).json({ message: "Successfully deleted flight" });
 } catch (error) {
    console.log("Flight not deleted", error);
    res.status(500).json({ message: "Internal Server Error"});
 }
};


export async function findFlights(req, res){
    try {
        console.log(req.body);
        const { originSearch, destinationSearch} = req.body;
        
        if(!originSearch || !destinationSearch){
            return res.status(404).json({ message: "Missing fields" });
        }

        const originRegex = new RegExp(originSearch.trim(), "i");
        const destinationRegex = new RegExp(destinationSearch.trim(), "i");

        const foundFlights = await Flight.find({
            $and: [
                {
                $or: [
                    {"origin.city": originRegex},
                    {"origin.iataCode": originRegex}
                ]
            },
            {
               $or: [
                {"destination.city": destinationRegex},
                {"destination.iataCode": destinationRegex}
               ] 
            }
                
            ]
        });
        
        console.log(foundFlights);
        
        if(!foundFlights){
            return res.status(404).json({ message: "We don't have any airlines for that path" });

        }
        console.log(foundFlights);
        res.status(200).json(foundFlights);
    } catch (error) {
        console.log("Internal Server error", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};


export async function airlineFlights(req, res){
    try {
        const { airline } = req.body;
        const sellerFlights = await Flight.find(airline);
        if(!sellerFlights){
            return res.status(404).json({ message: " error in finding flights" });
        }
        console.log(sellerFlights);
        res.status(200).json(sellerFlights);
    } catch (error) {
        console.log("Internal Server error", error);
        res.status(500).json({ message: "Airlineflights Error" });
    }
};

export async function viewFlight(req, res){
    try {
        const flightDetails = Flight.findById(req.params.id);
        if(!flightDetails){
            return res.status(404).json({ message: " error in finding flight" });
        }
        console.log(flightDetails);
        res.status(200).json(flightDetails);

    } catch (error) {
        console.log("Internal Server error", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};
