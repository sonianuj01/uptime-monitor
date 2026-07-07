import axios from "axios";

interface PingResult {
    statusCode: number;
    responseTime: number;
    status: "UP" | "DOWN";
}

export const pingWebsite = async (
    url: string
): Promise<PingResult> => {
    const start = Date.now();

    try {
        const response = await axios.get(url, {
            timeout: 10000,
            validateStatus: () => true
        });

        const end = Date.now();

        return {
            statusCode: response.status,
            responseTime: end - start,
            status: "UP"
        };
    } catch (error: any) {
        const end = Date.now();

        return {
            statusCode: error.response?.status || 0,
            responseTime: end - start,
            status: "DOWN"
        };
    }
};