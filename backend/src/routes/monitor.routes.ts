import { Router } from "express";

import {
    addMonitor,
    getMonitors,
    getMonitorHistory,
    deleteMonitor
} from "../controllers/monitor.controller";

const router = Router();

router.post("/", addMonitor);

router.get("/", getMonitors);

router.get("/:id", getMonitorHistory);

router.delete("/:id", deleteMonitor);

export default router;