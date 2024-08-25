// src/routes/index.js
import express from "express";
const router = express.Router();

// Ruta de prueba
router.get('/test', (req, res) => {
  res.status(200).json({ message: "Ruta de prueba funcionando correctamente" });
});

// Aquí puedes agregar más rutas

export default router;
