import { Search } from "lucide-react";

interface Props {

    value: string;

    onChange: (
        value: string
    ) => void;

}

const SearchBar = ({
    value,
    onChange,
}: Props) => {

    return (

        <div className="relative">

            <Search
                size={18}
                className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                "
            />

            <input

                value={value}

                onChange={(e) =>
                    onChange(e.target.value)
                }

                placeholder="Search websites..."

                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    py-3
                    pl-12
                    pr-4
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                "

            />

        </div>

    );

};

export default SearchBar;