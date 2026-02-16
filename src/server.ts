import express from "express";
import dotenv from "dotenv";
import { corsMiddleware } from "./config/cors";

dotenv.config();

const app = express();

app.use(corsMiddleware);
app.use(express.json());

// Ejemplo de rutas
app.get("/api/featured-articles", (req, res) => {
  res.json([{ id: 1, title: "Artículo destacado" }]);
});

app.get("/api/articles", (req, res) => {
  res.json([{ id: 1, title: "Artículo 1" }, { id: 2, title: "Artículo 2" }]);
});

app.get("/api/categories", (req, res) => {
  res.json(["Arte", "Moda", "Música"]);
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API corriendo en puerto ${PORT}`));
