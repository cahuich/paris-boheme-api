import cors from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  "https://paris-boheme.vercel.app"
];

export const corsMiddleware = cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
});
