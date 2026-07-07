import { FaHeartbeat } from "react-icons/fa";

interface Props {
    total: number;
}

const Header = ({ total }: Props) => {

    return (

        <header className="bg-slate-900 shadow-lg">

            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

                <div className="flex items-center gap-4">

                    <div className="bg-green-500 rounded-full p-3">

                        <FaHeartbeat
                            className="text-white"
                            size={24}
                        />

                    </div>

                    <div>

                        <h1 className="text-3xl font-bold text-white">

                            Uptime Monitor

                        </h1>

                        <p className="text-slate-300">

                            Monitor website availability

                        </p>

                    </div>

                </div>

                <div className="bg-blue-600 px-5 py-2 rounded-full text-white font-semibold">

                    {total} Monitor{total !== 1 ? "s" : ""}

                </div>

            </div>

        </header>

    );

};

export default Header;