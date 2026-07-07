import { Request, Response } from "express";

import Monitor from "../models/Monitor";
import HealthCheck from "../models/HealthCheck";

export const addMonitor = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { url } = req.body;

        if (!url) {
            res.status(400).json({
                success: false,
                message: "URL is required"
            });
            return;
        }

        const exists = await Monitor.findOne({ url });

        if (exists) {
            res.status(409).json({
                success: false,
                message: "URL already exists"
            });
            return;
        }

        const monitor = await Monitor.create({ url });

        res.status(201).json({
            success: true,
            message: "Monitor added successfully",
            data: monitor
        });
    } catch (error) {
        console.error("Add Monitor Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const getMonitors = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const monitors = await Monitor.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            count: monitors.length,
            data: monitors
        });
    } catch (error) {
        console.error("Get Monitors Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const getMonitorHistory = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const history = await HealthCheck.find({
            monitorId: req.params.id
        }).sort({
            checkedAt: -1
        });

        res.status(200).json({
            success: true,
            count: history.length,
            data: history
        });
    } catch (error) {
        console.error("Get History Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

export const deleteMonitor = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const monitor = await Monitor.findById(req.params.id);

        if (!monitor) {
            res.status(404).json({
                success: false,
                message: "Monitor not found"
            });
            return;
        }

        await Monitor.findByIdAndDelete(req.params.id);

        await HealthCheck.deleteMany({
            monitorId: req.params.id
        });

        res.status(200).json({
            success: true,
            message: "Monitor deleted successfully"
        });
    } catch (error) {
        console.error("Delete Monitor Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};