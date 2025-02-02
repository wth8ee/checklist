import { ColorTab } from "./ColorTab";

export function ColorPanel({ values, setValues }) {
    return (
        <div className="w-full h-[calc(100vh-calc(100vh*(calc(2/9)))-2px)] bg-white pt-[1vmin]">
            <ColorTab
                color="bg-cyan-300"
                value={values.cyan}
                setValues={setValues}
                values={values}
            />
            <ColorTab
                color="bg-emerald-300"
                value={values.emerald}
                setValues={setValues}
                values={values}
            />
            <ColorTab
                color="bg-lime-300"
                value={values.lime}
                setValues={setValues}
                values={values}
            />
            <ColorTab
                color="bg-yellow-300"
                value={values.yellow}
                setValues={setValues}
                values={values}
            />
            <ColorTab
                color="bg-orange-400"
                value={values.orange}
                setValues={setValues}
                values={values}
            />
            <ColorTab
                color="bg-red-500"
                value={values.red}
                setValues={setValues}
                values={values}
            />
            <ColorTab
                color="bg-slate-500"
                value={values.black}
                setValues={setValues}
                values={values}
            />
        </div>
    );
}
