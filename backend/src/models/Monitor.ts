import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";

export interface IMonitor extends Document {
    url: string;

    latestStatus: "UP" | "DOWN";

    latestStatusCode: number;

    latestResponseTime: number;

    lastChecked: Date | null;

    createdAt: Date;

    updatedAt: Date;
}

const MonitorSchema = new Schema<IMonitor>(
    {
        url: {
            type: String,
            required: [true, "URL is required"],
            unique: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: (value: string) =>
                    validator.isURL(value, {
                        protocols: ["http", "https"],
                        require_protocol: true,
                    }),
                message: "Please provide a valid URL (http:// or https://)",
            },
        },

        latestStatus: {
            type: String,
            enum: ["UP", "DOWN"],
            default: "DOWN",
        },

        latestResponseTime: {
            type: Number,
            default: 0,
        },

        lastChecked: {
            type: Date,
            default: null,
        },
        latestStatusCode: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
    }
);

const Monitor = mongoose.model<IMonitor>("Monitor", MonitorSchema);

export default Monitor;