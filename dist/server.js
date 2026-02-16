"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = require("./config/cors");
const app = (0, express_1.default)();
app.use(cors_1.corsMiddleware);
app.use(express_1.default.json());
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
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
