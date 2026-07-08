import {
    Globe,
    CheckCircle2,
    XCircle,
    Timer,
} from "lucide-react";

import Card from "../common/Card";

interface Props {

    total: number;

    online: number;

    offline: number;

    average: number;

}

const StatsCards = ({
    total,
    online,
    offline,
    average,
}: Props) => {

    const stats = [

        {
            title: "TOTAL",
            value: total,
            icon: Globe,
            color: "text-blue-600",
            bg: "bg-blue-50",
        },

        {
            title: "ONLINE",
            value: online,
            icon: CheckCircle2,
            color: "text-green-600",
            bg: "bg-green-50",
        },

        {
            title: "OFFLINE",
            value: offline,
            icon: XCircle,
            color: "text-red-600",
            bg: "bg-red-50",
        },

        {
            title: "AVG RESPONSE",
            value: `${average} ms`,
            icon: Timer,
            color: "text-orange-600",
            bg: "bg-orange-50",
        },

    ];

    return (

        <div

            className="
                grid
                gap-8
                sm:grid-cols-2
                xl:grid-cols-4
                mb-12
            "

        >

            {

                stats.map((item) => {

                    const Icon = item.icon;

                    return (

                        <Card key={item.title}>

                            <div className="flex justify-between items-start">

                                <div>

                                    <p

                                        className="
                                            uppercase
                                            tracking-[0.2em]
                                            text-xs
                                            text-slate-400
                                        "

                                    >

                                        {item.title}

                                    </p>

                                    <h2

                                        className="
                                            mt-5
                                            text-4xl
                                            font-bold
                                            text-slate-900
                                        "

                                    >

                                        {item.value}

                                    </h2>

                                </div>

                                <div

                                    className={`
                                        h-14
                                        w-14
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        ${item.bg}
                                    `}

                                >

                                    <Icon

                                        size={26}

                                        className={item.color}

                                    />

                                </div>

                            </div>

                        </Card>

                    );

                })

            }

        </div>

    );

};

export default StatsCards;