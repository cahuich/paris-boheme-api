// src/server.ts
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS (cambiar URL al frontend de Vercel)
const FRONTEND_URL = process.env.FRONTEND_URL || "https://paris-boheme.vercel.app";
app.use(cors({ origin: FRONTEND_URL }));

app.get("/", (req, res) => {
  res.send("API Paris-Boheme funcionando!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
