import { useState } from "react";
import type { FormEvent } from "react";

import toast from "react-hot-toast";
import api from "../services/api";

interface Props {
    refresh: () => void;
}

const MonitorForm = ({ refresh }: Props) => {

    const [url, setUrl] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {

        e.preventDefault();

        try {

            new URL(url);

        } catch {

            toast.error("Please enter a valid URL");

            return;

        }

        try {

            setLoading(true);

            const response = await api.post(
                "/monitors",
                { url }
            );

            if (response.data.success) {

                toast.success(
                    "Monitor added successfully"
                );

                setUrl("");

                refresh();

            }

        } catch (error: any) {

            toast.error(
                error.response?.data?.message ||
                "Something went wrong"
            );

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="bg-white rounded-2xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-6">

                Add Website

            </h2>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col lg:flex-row gap-4"
            >

                <input
                    type="text"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="
                flex-1
                rounded-xl
                border
                border-slate-300
                px-5
                py-4
                text-lg
                outline-none
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
            "
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="
                lg:w-48
                w-full
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                transition
                py-4
                disabled:bg-gray-400
            "
                >

                    {loading
                        ? "Adding..."
                        : "Add Monitor"}

                </button>

            </form>

        </div>

    );

};

export default MonitorForm;