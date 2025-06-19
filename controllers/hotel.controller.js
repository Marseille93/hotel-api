const Hotel = require("../models/hotels.model");

exports.createHotel = async (req, res) => {
	try {
		const hotelData = req.body;

		// Ajouter la photo si elle existe
		if (req.file) {
			hotelData.photo = req.file.path;
		}

		const newHotel = new Hotel(hotelData);
		await newHotel.save();

		res.status(201).json(newHotel);
	} catch (error) {
		console.error("Erreur création hôtel:", error);
		res.status(400).json({
			message: "Erreur de création",
			error: error.message || error,
		});
	}
};

exports.getHotels = async (req, res) => {
	try {
		const hotels = await Hotel.find();
		res.status(200).json(hotels);
	} catch (error) {
		console.error("Erreur récupération hôtels:", error);
		res.status(500).json({
			message: "Erreur lors de la récupération des hôtels",
			error: error.message || error,
		});
	}
};
