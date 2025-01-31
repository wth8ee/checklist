import { AvatarPlaceholder } from "./AvatarPlaceholder";
import { ColorPanel } from "./ColorPanel";

export function RightPanel() {
  return (
    <div className="min-h-screen max-h-screen overflow-hidden w-[calc(100vw*calc(3/16))] flex flex-col items-center bg-white">
      <div className="flex flex-col items-center w-full">
        <div className="w-full h-[calc(100vh*(calc(2/18)))] ml-10 flex items-center">
          <AvatarPlaceholder />
        </div>
        <div className="w-[80%] h-[1px] bg-slate-300" />
        <div className="w-full h-[calc(100vh*(calc(2/18)))]"></div>
      </div>
      <div className="w-[80%] h-[1px] bg-slate-300" />
      <ColorPanel />
    </div>
  );
}
