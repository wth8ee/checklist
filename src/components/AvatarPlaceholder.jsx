import { UserIcon } from "../icons/UserIcon";

export function AvatarPlaceholder({ className, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`${className} bg-slate-400 aspect-square h-[60%] rounded-full shadow relative overflow-hidden outline outline-[1px] outline-slate-300`}
        >
            <UserIcon
                className={`${className} h-full aspect-square absolute text-slate-200 top-[15%]`}
            />
        </div>
    );
}
