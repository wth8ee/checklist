import { ColorTab } from "./ColorTab";

export function ColorPanel() {
  return (
    <div className="w-full h-[calc(100vh-calc(100vh*(calc(2/9)))-2px)] bg-white pt-[1vmin]">
      <ColorTab color="cyan-300" />
      <ColorTab color="emerald-300" />
      <ColorTab color="lime-300" />
      <ColorTab color="yellow-300" />
      <ColorTab color="orange-400" />
      <ColorTab color="red-500" />
      <ColorTab color="black" />
    </div>
  );
}
