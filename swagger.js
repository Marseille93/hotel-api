// swagger.js
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "API Hôtel",
			version: "1.0.0",
			description: "Documentation de l’API de gestion des hôtels",
		},
		servers: [
			{
				url: "https://hotel-api-9p5w.onrender.com/",
			},
		],
	},
	apis: ["./routes/*.js"], // ← ce chemin est important !
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
	console.log("Swagger chargé !");
	app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
