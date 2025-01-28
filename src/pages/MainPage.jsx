import { LeftPanel } from "../components/LeftPanel";
import { RightPanel } from "../components/RightPanel";

export function MainPage() {
    return (
        <div className="bg-slate-100 min-h-screen w-screen flex justify-between">
            <LeftPanel />
            <div></div>
            <RightPanel />
        </div>
    );
}
