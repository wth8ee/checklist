import { CentralPanel } from "../components/CentralPanel";
import { LeftPanel } from "../components/LeftPanel";
import { RightPanel } from "../components/RightPanel";

export function MainPage() {
  return (
    <div className="bg-slate-200 min-h-screen w-screen flex justify-between">
      <LeftPanel />
      <CentralPanel />
      <RightPanel />
    </div>
  );
}
