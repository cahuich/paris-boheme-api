import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { corsMiddleware } from "./config/cors";

dotenv.config();

const app = express();

/**
 * 🔐 Seguridad HTTP headers
 */
app.use(
  helmet({
    contentSecurityPolicy: false // desactiva CSP si es API pura
  })
);

/**
 * 🚦 Rate limiting global
 */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por IP
  standardHeaders: true,
  legacyHeaders: false
});

app.use(limiter);

/**
 * Necesario en Render (proxy)
 */
app.set("trust proxy", 1);

app.use(corsMiddleware);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "API secure and running" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
