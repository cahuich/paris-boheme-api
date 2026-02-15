// src/config/cors.ts
import cors from 'cors';

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

export const corsMiddleware = cors({
  origin: FRONTEND_URL,
  credentials: true,
});
