import clsx from "clsx";

export function Tab({ title, isSelected, onClick }) {
    return (
        <div
            className={clsx(
                "w-full overflow-hidden select-none h-[calc(100vh*calc(1/12))] flex items-center px-[max(4vmin,20px)] cursor-pointer transition-colors text-ellipsis",
                isSelected ? "bg-slate-400" : "bg-white"
            )}
            onClick={onClick}
        >
            <div className="h-full w-full flex items-center justify-start overflow-hidden">
                <div
                    className={clsx(
                        "h-[10%] aspect-square rounded-full mr-6 transition-colors",
                        isSelected ? "bg-white" : "bg-slate-400"
                    )}
                />
                <div
                    className={clsx(
                        "text-xl font-medium transition-colors max-w-[60%] text-ellipsis whitespace-nowrap",
                        isSelected ? "text-white" : "text-slate-800"
                    )}
                >
                    {title}
                </div>
            </div>
        </div>
    );
}
