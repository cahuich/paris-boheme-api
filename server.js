// backend/index.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

// 🌐 CORS apuntando al frontend Vercel
const allowedOrigins = ["https://paris-boheme.vercel.app"];
app.use(cors({ origin: allowedOrigins }));

app.use(bodyParser.json());

// 📰 Endpoints de ejemplo
app.get("/api/featured-articles", (req, res) => {
  res.json([
    { id: 1, title: "Artículo 1", summary: "Resumen 1" },
    { id: 2, title: "Artículo 2", summary: "Resumen 2" },
  ]);
});

app.get("/api/articles", (req, res) => {
  res.json([
    { id: 1, title: "Artículo 1", content: "Contenido 1" },
    { id: 2, title: "Artículo 2", content: "Contenido 2" },
  ]);
});

app.get("/api/categories", (req, res) => {
  res.json(["Arte", "Moda", "Viajes"]);
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});
