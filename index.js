const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const path = require("path");

const hotelRoutes = require("./routes/hotel.routes");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/hotels", hotelRoutes);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

mongoose
	.connect(
		"mongodb+srv://admin:marseille1393@backend.4ip40gn.mongodb.net/hotels-api?retryWrites=true&w=majority&appName=backend"
	)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.error("Error connecting to MongoDB:", err);
	});
