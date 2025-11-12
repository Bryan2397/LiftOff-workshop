import Seller from "../models/Sellers.js";

export const registerSeller = async (req, res) =>{
    try {
        console.log(req.body);
        const {firstName, lastName, companyName, contactEmail, iataCode,
            role, password, country, phoneNumber, companyWebsite
         } = req.body;

        if(!firstName || !lastName || !companyName || !contactEmail || !companyWebsite 
            || !iataCode || !role || !password || !country || !phoneNumber
        ){
            return res.status(404).json({ message: "Missing fields" });
        }

        const newSeller = new Seller({
            firstName: firstName,
            lastName: lastName,
            iataCode: iataCode,
            role: role,
            companyName: companyName,
            contactEmail: contactEmail,
            country: country,
            password: password,
            phoneNumber: phoneNumber,
            companyWebsite: companyWebsite
        });

        await newSeller.save();
        res.status(201).json({ message: "Seller successfully created" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
        console.log("Error with Seller register", error);
    }
};

export async function loginSeller(req, res){
    try {
        const { contactEmail, password } = req.body;
        const seller = Seller.find({ contactEmail, password });

        if(!seller){
            return res.status(404).json({ message: "Invalid Credentials" });
        }
        res.status(201).json({ message: "Successfully logged in" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
        console.log("Error with Seller register", error);
    }
};

export async function sellerProfile(req, res){
    try {
        const seller = await Seller.find(req.params.id);
        res.status(200).json({ seller });
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
        console.log("Error with Seller register", error);
    }
};

export async function sellerFlights(req, res){
    try {
        console.log(req.body);
        const sellerFlights = await Flight.find(req.params.id);
        if(!sellerFlights){
            return res.status(404).json({ message: " error in finding flights" });
        }
        console.log(sellerFlights);
        res.status(200).json(sellerFlights);
    } catch (error) {
        console.log("Internal Server error", error);
        res.status(500).json({ message: "Internal Server error" });
    }
};

export async function updateSeller(req, res){

};