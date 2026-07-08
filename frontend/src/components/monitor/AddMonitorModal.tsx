import { useState } from "react";
import toast from "react-hot-toast";

import api from "../../services/api";
import type { ApiResponse, Monitor } from "../../types/monitor";

import Button from "../common/Button";
import Card from "../common/Card";

interface Props {
    open: boolean;
    onClose: () => void;
    refresh: () => void;
}

const AddMonitorModal = ({
    open,
    onClose,
    refresh,
}: Props) => {

    const [url, setUrl] = useState("");

    const [loading, setLoading] = useState(false);

    if (!open) return null;

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        if (!url.trim()) {
            toast.error("Please enter a URL");
            return;
        }

        try {

            new URL(url);

        } catch {

            toast.error("Invalid URL");
            return;

        }

        try {

            setLoading(true);

            await api.post<ApiResponse<Monitor>>(
                "/monitors",
                {
                    url,
                }
            );

            toast.success("Monitor added");

            setUrl("");

            refresh();

        } catch (error: any) {

            toast.error(
                error.response?.data?.message ??
                "Unable to add monitor"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div
            className="
                fixed
                inset-0
                bg-black/40
                flex
                items-center
                justify-center
                z-50
                p-6
            "
        >

            <Card className="w-full max-w-lg">

                <h2 className="text-2xl font-bold">

                    Add Monitor

                </h2>

                <p className="text-slate-500 mt-2">

                    Enter a website URL to begin monitoring.

                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-5"
                >

                    <input

                        value={url}

                        onChange={(e) =>
                            setUrl(e.target.value)
                        }

                        placeholder="https://example.com"

                        className="
                            w-full
                            rounded-xl
                            border
                            border-slate-300
                            px-4
                            py-3
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "

                    />

                    <div className="flex justify-end gap-3">

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            disabled={loading}
                        >
                            {loading
                                ? "Adding..."
                                : "Add Monitor"}
                        </Button>

                    </div>

                </form>

            </Card>

        </div>

    );

};

export default AddMonitorModal;