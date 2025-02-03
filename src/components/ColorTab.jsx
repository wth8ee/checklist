import { act, useState } from "react";
import { PlusIcon } from "../icons/PlusIcon";

export function ColorTab({ color, value, setValues, values }) {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  let realColor = color?.slice(3).split("-")?.[0];
  if (realColor == "slate") {
    realColor = "black";
  }

  const handleAddClick = () => {
    setActive(true);
  };

  const handleSetClick = () => {
    setValues({
      ...values,
      [realColor]: inputValue,
    });
    localStorage.setItem(
      "values",
      JSON.stringify({ ...values, [realColor]: inputValue })
    );
  };

  const handleUnsetClick = () => {
    setInputValue(values[realColor]);
    setValues({
      ...values,
      [realColor]: null,
    });
    setActive(true);
  };

  return (
    <div className="flex w-full h-[max(6vmin)] p-[2vmin] items-center justify-start">
      <div
        className={`aspect-square h-[max(4vmin)] shadow-sm ${color} rounded-[30%] transition-all mr-[2vmin] border-white/10 border-4 hover:border-white/50 cursor-pointer`}
      />
      {!value && !active && (
        <div
          onClick={handleAddClick}
          className="w-full cursor-pointer gap-[1vmin] transition-colors hover:text-slate-700 text-slate-500 flex justify-center items-center outline outline-1 outline-slate-300 h-[max(4vmin)] rounded-full select-none hover:outline-slate-500"
        >
          Add
          <PlusIcon className="aspect-square h-[2vmin] w-[2vmin] text-current" />
        </div>
      )}
      {!value && active && (
        <div className="flex justify-center items-center w-full gap-[2vmin]">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="number"
            className="w-[calc(50%-1vmin)] outline outline-1 outline-slate-300 h-[max(4vmin)] p-[1vmin] text-slate-700"
          />
          <button
            onClick={handleSetClick}
            className="cursor-pointer w-[calc(50%-1vmin)] transition-colors hover:text-slate-700 text-slate-500 outline outline-1 outline-slate-300 h-[max(4vmin)] rounded-full select-none hover:outline-slate-500"
          >
            Set
          </button>
        </div>
      )}
      {value && (
        <div
          onClick={handleUnsetClick}
          className="w-full cursor-pointer gap-[1vmin] transition-colors hover:text-slate-700 text-slate-500 flex justify-center items-center outline outline-1 outline-slate-300 h-[max(4vmin)] rounded-full select-none hover:outline-slate-500"
        >
          {value}
        </div>
      )}
    </div>
  );
}
