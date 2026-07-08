interface Props {

    status: "UP" | "DOWN";

}

const StatusBadge = ({
    status,
}: Props) => {

    const up = status === "UP";

    return (

        <span

            className={`
                inline-flex
                items-center
                gap-2
                rounded-full
                px-3
                py-1.5
                text-sm
                font-semibold

                ${
                    up
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
            `}

        >

            <span

                className={`
                    h-2
                    w-2
                    rounded-full

                    ${
                        up
                        ? "bg-green-500"
                        : "bg-red-500"
                    }
                `}

            />

            {

                up
                    ? "Operational"
                    : "Offline"

            }

        </span>

    );

};

export default StatusBadge;