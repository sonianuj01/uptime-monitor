import { Globe } from "lucide-react";

const EmptyState = () => {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                py-24
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

                <Globe
                    size={34}
                    className="text-blue-600"
                />

            </div>

            <h2 className="text-3xl font-bold mt-8">

                No Monitors Yet

            </h2>

            <p className="text-slate-500 mt-3">

                Add your first website to start monitoring.

            </p>

        </div>

    );

};

export default EmptyState;