import mongoose, { Schema, Document, Types } from "mongoose";

export interface IHealthCheck extends Document {
    monitorId: Types.ObjectId;

    statusCode: number;

    responseTime: number;

    status: "UP" | "DOWN";

    checkedAt: Date;
}

const HealthCheckSchema = new Schema<IHealthCheck>({
    monitorId: {
        type: Schema.Types.ObjectId,
        ref: "Monitor",
        required: true
    },

    statusCode: {
        type: Number,
        required: true
    },

    responseTime: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["UP", "DOWN"],
        required: true
    },

    checkedAt: {
        type: Date,
        default: Date.now
    }
});

const HealthCheck = mongoose.model<IHealthCheck>(
    "HealthCheck",
    HealthCheckSchema
);

export default HealthCheck;