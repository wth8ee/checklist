import { SettingsIcon } from "../icons/SettingsIcon";
import { AvatarPlaceholder } from "./AvatarPlaceholder";
import { ColorPanel } from "./ColorPanel";

export function RightPanel({ values, setValues }) {
    return (
        <div className="min-h-screen max-h-screen overflow-hidden w-[calc(100vw*calc(3/16))] flex flex-col items-center bg-white">
            <div className="flex flex-col items-center w-full">
                <div className="w-full h-[calc(100vh*(calc(2/18)))] ml-10 flex items-center">
                    <div className="w-full h-[60%] flex items-center gap-[2vmin]">
                        <AvatarPlaceholder className="cursor-pointer" />
                        <div className="h-full flex flex-col justify-center gap-[1vmin]">
                            <div className="w-[max(20vmin)] bg-slate-300 h-[max(1.5vmin)] rounded-full" />
                            <div className="w-[max(12vmin)] bg-slate-300 h-[1vmin] rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="w-[80%] h-[1px] bg-slate-300" />
                <div className="w-full h-[calc(100vh*(calc(2/18)))] ml-10 flex items-center">
                    <div className="w-full h-[60%] flex items-center gap-[2vmin]">
                        <SettingsIcon className="h-full text-slate-400 cursor-pointer" />
                        <div className="h-full flex flex-col justify-center gap-[1vmin]">
                            <div className="w-[max(20vmin)] bg-slate-300 h-[max(1.5vmin)] rounded-full" />
                            <div className="w-[max(12vmin)] bg-slate-300 h-[1vmin] rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[80%] h-[1px] bg-slate-300" />
            <ColorPanel values={values} setValues={setValues} />
        </div>
    );
}
