export type Monitor = {
    _id: string;
    url: string;
    latestStatus: "UP" | "DOWN";
    latestStatusCode: number;
    latestResponseTime: number;
    lastChecked: string | null;
    createdAt: string;
    updatedAt: string;
};

export type ApiResponse<T> = {
    success: boolean;
    message?: string;
    count?: number;
    data: T;
};