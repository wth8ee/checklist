import { UserIcon } from "../icons/UserIcon";

export function AvatarPlaceholder({ className, onClick }) {
    return (
        <div
            onClick={onClick}
            className={`${className} bg-slate-400 aspect-square h-full rounded-full relative overflow-hidden`}
        >
            <UserIcon
                className={`${className} h-full aspect-square absolute text-slate-200 top-[15%]`}
            />
        </div>
    );
}
