import { useState } from "react";
import { Tab } from "./Tab";
const tabs = ["Deutsch", "Homework", "Programming"];
export function LeftPanel() {
    const [selected, setSelected] = useState(tabs?.[0]);
    return (
        <div className="min-h-screen w-[calc(100vw/8)] bg-white">
            <div className="flex flex-col gap-[1px] bg-slate-300 pb-[1px]">
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
