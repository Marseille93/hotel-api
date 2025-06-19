const e = require("express");
const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 2,
		maxlength: 100,
	},
	address: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true,
		match: [/^\S+@\S+\.\S+$/, "Adresse email invalide"],
	},
	phone: {
		type: String,
		required: true,
		match: [/^\+?\d{7,15}$/, "Numéro de téléphone invalide"],
	},

	pricePerNight: {
		type: Number,
		required: true,
		min: [0, "Le prix ne peut pas être négatif"],
	},
	devise: {
		type: String,
		enum: {
			values: ["F XOF", "EURO", "DOLLAR"],
			message: "{VALUE} n’est pas une devise acceptée",
		},
		required: true,
	},
	photo: {
		type: String,
	},
});
module.exports = mongoose.model("Hotel", HotelSchema);
