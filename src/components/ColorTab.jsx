import { PlusIcon } from "../icons/PlusIcon";

export function ColorTab({ color, value }) {
  return (
    <div className="flex w-full h-[max(6vmin)] p-[2vmin] items-center justify-start">
      <div
        className={`aspect-square h-[max(4vmin)] shadow-sm bg-${color} rounded-[30%] mr-[2vmin] cursor-pointer`}
      />
      <div className="w-full cursor-pointer gap-[2vmin] transition-colors hover:text-slate-700 text-slate-800 flex justify-center items-center outline outline-1 outline-slate-300 h-[max(4vmin)] rounded-full select-none hover:outline-slate-500">
        Add
        <PlusIcon className="aspect-square h-[2vmin] text-slate-500" />
      </div>
    </div>
  );
}
