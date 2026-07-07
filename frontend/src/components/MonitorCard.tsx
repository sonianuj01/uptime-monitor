import {
    FaGlobe,
    FaTrash,
    FaClock,
    FaServer,
    FaBolt
} from "react-icons/fa";

import StatusBadge from "./StatusBadge";
import type { Monitor } from "../types/monitor";

interface Props {
    monitor: Monitor;
    onDelete: (id: string) => void;
}

const MonitorCard = ({ monitor, onDelete }: Props) => {

    const responseColor = () => {

        if (monitor.latestStatus === "DOWN")
            return "text-red-600";

        if (monitor.latestResponseTime < 200)
            return "text-green-600";

        if (monitor.latestResponseTime < 1000)
            return "text-yellow-500";

        return "text-red-600";

    };

    return (

        <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            hover:shadow-xl
            transition
            duration-300
            border
            border-slate-200
            overflow-hidden
        "
        >

            <div className="
                bg-white
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition
                p-7
                border
                "
            >

                <div className="flex justify-between items-start">

                    <div className="flex gap-3">

                        <div
                            className="
                            h-12
                            w-12
                            rounded-full
                            bg-blue-100
                            flex
                            items-center
                            justify-center
                        "
                        >

                            <FaGlobe
                                className="text-blue-600"
                            />

                        </div>

                        <div>

                            <h2 className="font-bold text-lg break-all">

                                {monitor.url}

                            </h2>

                            <div className="mt-2">

                                <StatusBadge
                                    status={monitor.latestStatus}
                                />

                            </div>

                        </div>

                    </div>

                    <button
                        onClick={() => onDelete(monitor._id)}
                        className="
                        text-red-500
                        hover:bg-red-50
                        p-2
                        rounded-lg
                        transition
                    "
                    >

                        <FaTrash size={18} />

                    </button>

                </div>

                <div className="grid grid-cols-3 gap-5 mt-8">

                    <div>

                        <div className="flex items-center gap-2 text-slate-500">

                            <FaServer />

                            HTTP

                        </div>

                        <p className="font-bold text-lg mt-2">

                            {monitor.latestStatusCode || "-"}

                        </p>

                    </div>

                    <div>

                        <div className="flex items-center gap-2 text-slate-500">

                            <FaBolt />

                            Response

                        </div>

                        <p
                            className={`font-bold text-lg mt-2 ${responseColor()}`}
                        >

                            {monitor.latestResponseTime} ms

                        </p>

                    </div>

                    <div>

                        <div className="flex items-center gap-2 text-slate-500">

                            <FaClock />

                            Checked

                        </div>

                        <p className="font-semibold mt-2 text-sm">

                            {

                                monitor.lastChecked
                                    ? new Date(
                                        monitor.lastChecked
                                    ).toLocaleString()
                                    : "Never"

                            }

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default MonitorCard;