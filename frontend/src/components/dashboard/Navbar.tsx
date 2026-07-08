import { Activity, Plus } from "lucide-react";

import Button from "../common/Button";

interface Props {

    total: number;

    onAdd: () => void;

}

const Navbar = ({
    total,
    onAdd,
}: Props) => {

    return (

        <header className="bg-slate-900 shadow-md">

            <div

                className="
                    max-w-7xl
                    mx-auto
                    px-8
                    h-24
                    flex
                    items-center
                    justify-between
                "

            >

                <div className="flex items-center gap-4">

                    <div

                        className="
                            h-14
                            w-14
                            rounded-xl
                            bg-green-500
                            flex
                            items-center
                            justify-center
                        "

                    >

                        <Activity
                            size={30}
                            className="text-white"
                        />

                    </div>

                    <div>

                        <h1 className="text-4xl font-bold text-white">

                            Uptime Monitor

                        </h1>

                        <p className="text-slate-400">

                            Monitor all your websites

                        </p>

                    </div>

                </div>

                <div className="flex items-center gap-5">

                    <span

                        className="
                            bg-slate-800
                            text-white
                            rounded-full
                            px-4
                            py-2
                        "

                    >

                        {total} Monitor{total !== 1 && "s"}

                    </span>

                    <Button onClick={onAdd}>

                        <Plus
                            size={18}
                            className="mr-2"
                        />

                        Add Monitor

                    </Button>

                </div>

            </div>

        </header>

    );

};

export default Navbar;