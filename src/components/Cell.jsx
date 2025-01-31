import clsx from "clsx";

export function Cell({ color }) {
  return (
    <div
      className={clsx(
        "aspect-square h-full w-full rounded-[30%] shadow",
        !color ? "bg-white" : `bg-${color}`
      )}
    />
  );
}
