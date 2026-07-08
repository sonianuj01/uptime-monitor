import {
    Globe,
    Trash2,
    Timer,
    Server,
} from "lucide-react";

import Card from "../common/Card";
import Button from "../common/Button";
import StatusBadge from "./StatusBadge";

import type { Monitor } from "../../types/monitor";

interface Props {

    monitor: Monitor;

    onDelete: (
        id: string
    ) => void;

}

const MonitorCard = ({
    monitor,
    onDelete,
}: Props) => {

    const hostname = new URL(
        monitor.url
    ).hostname;

    return (

        <Card>

            <div className="flex justify-between">

                <div>

                    <div className="flex items-center gap-3">

                        <Globe className="text-blue-600"/>

                        <div>

                            <h2 className="font-bold text-xl">

                                {hostname}

                            </h2>

                            <p className="text-sm text-slate-500 break-all">

                                {monitor.url}

                            </p>

                        </div>

                    </div>

                </div>

                <StatusBadge
                    status={monitor.latestStatus}
                />

            </div>

            <div className="grid grid-cols-3 gap-6 mt-8">

                <div>

                    <Server
                        size={18}
                        className="text-slate-400"
                    />

                    <p className="text-xs mt-3 uppercase text-slate-400">

                        HTTP

                    </p>

                    <h3 className="font-bold text-2xl mt-2">

                        {monitor.latestStatusCode}

                    </h3>

                </div>

                <div>

                    <Timer
                        size={18}
                        className="text-slate-400"
                    />

                    <p className="text-xs mt-3 uppercase text-slate-400">

                        Response

                    </p>

                    <h3 className="font-bold text-2xl mt-2">

                        {monitor.latestResponseTime} ms

                    </h3>

                </div>

                <div>

                    <p className="text-xs uppercase text-slate-400">

                        Checked

                    </p>

                    <h3 className="text-sm mt-3">

                        {

                            monitor.lastChecked

                            ? new Date(
                                monitor.lastChecked
                            ).toLocaleTimeString()

                            : "Never"

                        }

                    </h3>

                </div>

            </div>

            <div className="mt-8 flex justify-end">

                <Button

                    variant="danger"

                    onClick={() =>
                        onDelete(monitor._id)
                    }

                >

                    <Trash2
                        size={16}
                        className="mr-2"
                    />

                    Delete

                </Button>

            </div>

        </Card>

    );

};

export default MonitorCard;