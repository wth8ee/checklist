import clsx from "clsx";
import { PlusIcon } from "../icons/PlusIcon";
import { useState } from "react";
import { Modal } from "./Modal";
import { colors, outlines, shadows } from "../constants";
import { ColorSelectModal } from "./ColorSelectModal";

export function Cell({ value, index, setResults, results, values }) {
  const [open, setOpen] = useState(false);

  let c;
  for (let key in values) {
    if (values[key] == value) {
      c = key;
      break;
    }
  }
  const bgClass = value ? `bg-${colors[c]}` : null;
  const shadowClass = value ? shadows[c] : null;

  const handleResultSet = (col) => {
    const newResults = results.slice();
    if (col) {
      newResults[index] = values[col];
      setResults(newResults);
      localStorage.setItem("results", JSON.stringify(newResults));
    } else {
      const newestResults = newResults.filter((cell, i) => i != index);
      setResults(newestResults);
      localStorage.setItem("results", JSON.stringify(newestResults));
    }
    setOpen(false);
  };

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={clsx(
          "aspect-square w-[6vmin] h-[6vmin] rounded-[25%] cursor-pointer flex justify-center items-center group border-4 border-white",
          !bgClass ? "bg-white" : bgClass,
          shadowClass,
          shadowClass ? "shadow-md" : "shadow"
        )}
      >
        {!value && (
          <PlusIcon className="h-[80%] w-[80%] fill-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>
      <ColorSelectModal
        isOpen={open}
        onClose={() => setOpen(false)}
        handleResultSet={handleResultSet}
      />
    </>
  );
}
