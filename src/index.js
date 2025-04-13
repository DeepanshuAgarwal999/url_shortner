import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { router as mainRouter } from "./routes/index.js";
import connectDatabase from "./config/database.js";
import { limiter } from "./middleware/rateLimit.js";
import { Url } from "./models/Url.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", mainRouter);

app.get("/:shortCode", async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortCode });

    if (!url || !url.isActive || (url.expirationDate && url.expirationDate < new Date())) {
      return res.status(404).json({ message: "URL not found or expired" });
    }

    // Update analytics
    url.clicks += 1;
    url.analytics.push({
      timestamp: new Date(),
      ipAddress: req.ip,
      userAgent: req.headers["user-agent"],
      referrer: req.headers.referer || "",
    });
    await url.save();

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ message: "Error redirecting to URL" });
  }
});

// Connect to Database
connectDatabase();

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Apply rate limiting to all routes
app.use(limiter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
