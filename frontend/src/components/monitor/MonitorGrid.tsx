import MonitorCard from "./MonitorCard";

import type {
    Monitor,
} from "../../types/monitor";

interface Props {

    monitors: Monitor[];

    onDelete: (
        id: string
    ) => void;

}

const MonitorGrid = ({
    monitors,
    onDelete,
}: Props) => {

    return (

        <div

            className="
                grid
                gap-8
                md:grid-cols-2
                xl:grid-cols-3
            "

        >

            {

                monitors.map(

                    monitor => (

                        <MonitorCard

                            key={monitor._id}

                            monitor={monitor}

                            onDelete={onDelete}

                        />

                    )

                )

            }

        </div>

    );

};

export default MonitorGrid;