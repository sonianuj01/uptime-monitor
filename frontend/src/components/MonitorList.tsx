import type { Monitor } from "../types/monitor";

import MonitorCard from "./MonitorCard";

interface Props {

    monitors: Monitor[];

    onDelete: (id: string) => void;

}

const MonitorList = ({
    monitors,
    onDelete
}: Props) => {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {

                monitors.map((monitor) => (

                    <MonitorCard
                        key={monitor._id}
                        monitor={monitor}
                        onDelete={onDelete}
                    />

                ))

            }

        </div>

    );

};

export default MonitorList;