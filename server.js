import express from "express";
import cors from "cors";

const app = express();

// Permitir solo al frontend en Vercel
app.use(cors({
  origin: "https://paris-boheme.vercel.app", // tu frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, // si usas cookies o autenticación
}));

// Rutas
app.get("/api/featured-articles", (req, res) => {
  res.json({ message: "Hola desde backend" });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
