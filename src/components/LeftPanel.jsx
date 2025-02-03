import { useState } from "react";
import { Tab } from "./Tab";
const tabs = ["Deutsch", "Programming"];
export function LeftPanel({ values, results }) {
  const [selected, setSelected] = useState(tabs?.[0]);

  let total = 0;
  for (let result of results) {
    total += Number(result);
  }

  return (
    <div className="min-h-screen w-[calc(100vw/6)] bg-white flex flex-col justify-between">
      <div className="flex flex-col gap-[4px] bg-slate-300 pb-[4px]">
        {tabs.map((tab, i) => (
          <Tab
            title={tab}
            onClick={() => setSelected(tab)}
            key={i}
            isSelected={selected == tab}
          />
        ))}
      </div>
      <div className="w-full text-[2vmin]">
        <div className="px-[2vmin] py-[2vmin] w-full flex justify-between">
          Total Hours: <span className="text-black font-medium">{total}</span>
        </div>
        <div className="px-[2vmin] py-[2vmin] w-full flex justify-between">
          AVG Hours:{" "}
          <span className="text-black font-medium">
            {(total / results.length).toFixed(2)}
          </span>
        </div>
        <div className="px-[2vmin] py-[2vmin] w-full flex justify-between">
          Total Mins:{" "}
          <span className="text-black font-medium">{total * 60}</span>
        </div>
        <div className="px-[2vmin] py-[2vmin] w-full flex justify-between">
          AVG Mins:{" "}
          <span className="text-black font-medium">
            {((total * 60) / results.length).toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
