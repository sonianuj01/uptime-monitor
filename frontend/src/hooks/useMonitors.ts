import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import api from "../services/api";
import type { ApiResponse, Monitor } from "../types/monitor";

const useMonitors = () => {

    const [monitors, setMonitors] = useState<Monitor[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchMonitors = useCallback(async () => {

        try {

            setLoading(true);

            const response =
                await api.get<ApiResponse<Monitor[]>>("/monitors");

            setMonitors(response.data.data ?? []);

            setError("");

        } catch (error: any) {

            setError(
                error.response?.data?.message ||
                "Unable to fetch monitors"
            );

            toast.error("Unable to fetch monitors");

        } finally {

            setLoading(false);

        }

    }, []);

    const deleteMonitor = async (id: string) => {

        if (!window.confirm("Delete this monitor?"))
            return;

        try {

            await api.delete(`/monitors/${id}`);

            toast.success("Monitor deleted");

            fetchMonitors();

        } catch {

            toast.error("Delete failed");

        }

    };

    useEffect(() => {

        fetchMonitors();

        const interval = setInterval(
            fetchMonitors,
            30000
        );

        return () => clearInterval(interval);

    }, [fetchMonitors]);

    return {

        monitors,

        loading,

        error,

        fetchMonitors,

        deleteMonitor,

    };

};

export default useMonitors;