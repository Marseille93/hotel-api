const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotel.controller");
const upload = require("../middlewares/uploads");

// Route avec upload de fichier
router.post("/", upload.single("photo"), hotelController.createHotel);

// Route pour afficher la liste des hôtels
router.get("/", hotelController.getHotels);

module.exports = router;
