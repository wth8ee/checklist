import { useState } from "react";
import { Tab } from "./Tab";
const tabs = ["Deutsch", "Homework", "Programming", "Aaaaaaaaaaaaaaaaaaaaa"];
export function LeftPanel() {
  const [selected, setSelected] = useState(tabs?.[0]);
  return (
    <div className="min-h-screen w-[calc(100vw/6)] bg-white">
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
    </div>
  );
}
