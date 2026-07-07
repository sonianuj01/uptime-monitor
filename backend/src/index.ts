import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import monitorRoutes from "./routes/monitor.routes";
import startCron from "./scheduler/cron";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


// Middlewares
app.use(cors());
app.use(express.json());

// Health Route
app.get("/", (_, res) => {
    res.json({
        success: true,
        message: "Uptime Monitor API Running 🚀"
    });
});

// API Routes
app.use("/api/monitors", monitorRoutes);

const startServer = async () => {
    await connectDB();

    startCron();

    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
};

startServer();