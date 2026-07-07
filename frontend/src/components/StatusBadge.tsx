interface Props {
    status: "UP" | "DOWN";
}

const StatusBadge = ({ status }: Props) => {
    return status === "UP" ? (
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            🟢 UP
        </span>
    ) : (
        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
            🔴 DOWN
        </span>
    );
};

export default StatusBadge;