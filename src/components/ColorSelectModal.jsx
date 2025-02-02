import { Modal } from "./Modal";

export function ColorSelectModal({ isOpen, onClose, handleResultSet }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex bg-white p-[1vmin] shadow gap-[1vmin] rounded-[1vmin]">
                <div
                    onClick={() => handleResultSet("cyan")}
                    className={`aspect-square h-[max(4vmin)] shadow-sm bg-cyan-300 rounded-[30%] transition-all border-white/10 border-4 hover:border-white/50 cursor-pointer`}
                />
                <div
                    onClick={() => handleResultSet("emerald")}
                    className={`aspect-square h-[max(4vmin)] shadow-sm bg-emerald-300 rounded-[30%] transition-all border-white/10 border-4 hover:border-white/50 cursor-pointer`}
                />
                <div
                    onClick={() => handleResultSet("lime")}
                    className={`aspect-square h-[max(4vmin)] shadow-sm bg-lime-300 rounded-[30%] transition-all border-white/10 border-4 hover:border-white/50 cursor-pointer`}
                />
                <div
                    onClick={() => handleResultSet("yellow")}
                    className={`aspect-square h-[max(4vmin)] shadow-sm bg-yellow-300 rounded-[30%] transition-all border-white/10 border-4 hover:border-white/50 cursor-pointer`}
                />
                <div
                    onClick={() => handleResultSet("orange")}
                    className={`aspect-square h-[max(4vmin)] shadow-sm bg-orange-400 rounded-[30%] transition-all border-white/10 border-4 hover:border-white/50 cursor-pointer`}
                />
                <div
                    onClick={() => handleResultSet("red")}
                    className={`aspect-square h-[max(4vmin)] shadow-sm bg-red-500 rounded-[30%] transition-all border-white/10 border-4 hover:border-white/50 cursor-pointer`}
                />
                <div
                    onClick={() => handleResultSet("black")}
                    className={`aspect-square h-[max(4vmin)] shadow-sm bg-slate-500 rounded-[30%] transition-all border-white/10 border-4 hover:border-white/50 cursor-pointer`}
                />
                <div
                    onClick={() => handleResultSet(null)}
                    className={`aspect-square h-[max(4vmin)] shadow-sm bg-white rounded-[30%] transition-all border-2 border-dotted border-slate-500 cursor-pointer`}
                />
            </div>
        </Modal>
    );
}
