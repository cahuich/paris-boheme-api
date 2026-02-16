"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsMiddleware = void 0;
// src/config/cors.ts
const cors_1 = __importDefault(require("cors"));
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
exports.corsMiddleware = (0, cors_1.default)({
    origin: FRONTEND_URL,
    credentials: true,
});
