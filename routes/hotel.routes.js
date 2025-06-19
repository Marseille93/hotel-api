const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/hotel.controller");
const upload = require("../middlewares/uploads");

/**
 * @swagger
 * /api/hotels:
 *   post:
 *     summary: Créer un hôtel
 *     tags:
 *       - Hôtels
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - address
 *               - email
 *               - phone
 *               - pricePerNight
 *               - devise
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               pricePerNight:
 *                 type: number
 *               devise:
 *                 type: string
 *                 enum: [F XOF, EURO, DOLLAR]
 *     responses:
 *       201:
 *         description: Hôtel créé avec succès
 *       400:
 *         description: Erreur de validation
 */
// Route avec upload de fichier
router.post("/", upload.single("photo"), hotelController.createHotel);

/**
 * @swagger
 * /api/hotels:
 *   get:
 *     summary: Récupérer la liste des hôtels
 *     tags:
 *       - Hôtels
 *     responses:
 *       200:
 *         description: Liste des hôtels récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hotel'
 *       500:
 *         description: Erreur lors de la récupération des hôtels
 */

// Route pour afficher la liste des hôtels
router.get("/", hotelController.getHotels);

module.exports = router;
