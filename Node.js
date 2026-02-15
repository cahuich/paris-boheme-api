// server.ts o index.ts
import express from "express";
import cors from "cors";

const app = express();

// Configuración CORS
const allowedOrigins = [
  "https://paris-boheme.vercel.app", // Frontend en Vercel
  "http://localhost:5173",            // Frontend local (Vite)
];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sin origin (Postman, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS policy: Origin not allowed"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, // si usas cookies/autenticación
}));

// Parseo JSON
app.use(express.json());

// Rutas de ejemplo
app.get("/api/featured-articles", (req, res) => {
  res.json({
    articles: [
      { id: 1, title: "Artículo Destacado 1" },
      { id: 2, title: "Artículo Destacado 2" },
    ]
  });
});

app.get("/api/articles", (req, res) => {
  res.json({
    articles: [
      { id: 1, title: "Artículo 1", category: "monumentos" },
      { id: 2, title: "Artículo 2", category: "museos" },
    ]
  });
});

app.get("/api/categories", (req, res) => {
  res.json([
    { slug: "all", name: "Todos los artículos" },
    { slug: "monumentos", name: "Monumentos" },
    { slug: "museos", name: "Museos" },
  ]);
});

// Puerto de Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Backend corriendo en puerto ${PORT}`));
