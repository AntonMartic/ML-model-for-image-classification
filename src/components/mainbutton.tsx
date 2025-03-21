import { MainButtonProps } from "./types";

export function MainButton({ onClick, text, className, value }: MainButtonProps) {
    return (
        <button className={`py-4 text-xl transition duration-300 ease-in-out bg-neutral-400 cursor-pointer px-14 rounded-xl text-neutral-50 hover:bg-neutral-500 ${className}`}
            onClick={onClick}
            value={value}>
            {text}
        </button>
    )
}