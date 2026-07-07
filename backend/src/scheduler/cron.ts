import cron from "node-cron";

import Monitor from "../models/Monitor";

import HealthCheck from "../models/HealthCheck";

import { pingWebsite } from "../services/ping.service";

const startCron = () => {

    cron.schedule("* * * * *", async () => {

        console.log("Running Health Checks...");

        const monitors = await Monitor.find();

        for (const monitor of monitors) {

            const result = await pingWebsite(monitor.url);

            await HealthCheck.create({

                monitorId: monitor._id,

                statusCode: result.statusCode,

                responseTime: result.responseTime,

                status: result.status
            });

            monitor.latestStatus = result.status;

            monitor.latestStatusCode = result.statusCode;

            monitor.latestResponseTime = result.responseTime;

            monitor.lastChecked = new Date();

            await monitor.save();
        }

        console.log("Health Checks Completed");
    });

};

export default startCron;