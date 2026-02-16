"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const cors_1 = require("./config/cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
/**
 * 🔐 Seguridad HTTP headers
 */
app.use((0, helmet_1.default)({
    contentSecurityPolicy: false // desactiva CSP si es API pura
}));
/**
 * 🚦 Rate limiting global
 */
const limiter = (0, express_rate_limit_1.default)({
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
app.use(cors_1.corsMiddleware);
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.json({ status: "API secure and running" });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
