import clsx from "clsx";

export function Tab({ title, isSelected, onClick }) {
    return (
        <div
            className={clsx(
                "w-full h-[calc(100vh*calc(1/9))] flex items-center px-6 cursor-pointer transition-colors",
                isSelected ? "bg-violet-500" : "bg-white"
            )}
            onClick={onClick}
        >
            <div
                className={clsx(
                    "h-[10%] aspect-square rounded-full mr-6 transition-colors",
                    isSelected ? "bg-white" : "bg-violet-500"
                )}
            />
            <div
                className={clsx(
                    "text-xl font-medium transition-colors",
                    isSelected ? "text-white" : "text-violet-800"
                )}
            >
                {title}
            </div>
        </div>
    );
}
