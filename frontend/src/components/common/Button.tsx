import type { ReactNode } from "react";

interface ButtonProps {

    children: ReactNode;

    onClick?: () => void;

    type?: "button" | "submit";

    variant?: "primary" | "secondary" | "danger";

    disabled?: boolean;

    className?: string;

}

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
    className = "",
}: ButtonProps) => {

    const styles = {

        primary:
            "bg-blue-600 hover:bg-blue-700 text-white",

        secondary:
            "bg-slate-200 hover:bg-slate-300 text-slate-800",

        danger:
            "bg-red-500 hover:bg-red-600 text-white",

    };

    return (

        <button

            type={type}

            onClick={onClick}

            disabled={disabled}

            className={`
                inline-flex
                items-center
                justify-center
                rounded-xl
                px-6
                py-3
                font-semibold
                transition-all
                duration-200
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${styles[variant]}
                ${className}
            `}
        >

            {children}

        </button>

    );

};

export default Button;