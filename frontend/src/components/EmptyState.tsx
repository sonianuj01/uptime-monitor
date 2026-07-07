import { FaServer } from "react-icons/fa";

const EmptyState = () => {

    return (

        <div
            className="
            bg-white
            rounded-2xl
            shadow
            p-14
            text-center
        "
        >

            <div
                className="
                h-20
                w-20
                rounded-full
                bg-blue-100
                flex
                items-center
                justify-center
                mx-auto
            "
            >

                <FaServer
                    size={35}
                    className="text-blue-600"
                />

            </div>

            <h2 className="text-3xl font-bold mt-6">

                No Monitors Yet

            </h2>

            <p className="text-slate-500 mt-3">

                Add your first website and start monitoring its uptime.

            </p>

        </div>

    );

};

export default EmptyState;