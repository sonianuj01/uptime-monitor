import type { ReactNode } from "react";

interface CardProps {

    children: ReactNode;

    className?: string;

}

const Card = ({
    children,
    className = "",
}: CardProps) => {

    return (

        <div

            className={`
                bg-white
                rounded-2xl
                border
                border-slate-200
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                p-8
                ${className}
            `}

        >

            {children}

        </div>

    );

};

export default Card;