// index.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const cors = require("cors");
app.use(cors());
// Middleware
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const hotelRoutes = require("./routes/hotel.routes");
app.use("/api/hotels", hotelRoutes);

// Swagger
const setupSwagger = require("./swagger");
setupSwagger(app);

// MongoDB
mongoose
	.connect(
		"mongodb+srv://admin:marseille1393@backend.4ip40gn.mongodb.net/hotels-api?retryWrites=true&w=majority&appName=backend"
	)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Error connecting to MongoDB:", err));

// Lancer le serveur
app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
