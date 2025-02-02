import { Cell } from "./Cell";

export function CentralPanel({ results, setResults, values }) {
    const cellNumber = Math.max(
        60,
        Math.floor((results?.length ?? 0) / 30) * 30 + 30
    );
    const cells = [];
    for (let i in results) {
        cells.push(results[i]);
    }
    for (let i = 0; i < cellNumber; i++) {
        if (!cells[i]) {
            cells.push(null);
        }
    }
    return (
        <div className="flex justify-center items-center overflow-hidden w-[calc(100vw-calc(100vw/6)-calc(100vw*calc(3/16)))] h-full p-[max(2vmin)]">
            <div className="grid grid-cols-10 gap-[max(2vmin)] w-full h-full">
                {cells.map((cell, i) => (
                    <Cell
                        value={cell}
                        key={i}
                        index={i}
                        setResults={setResults}
                        results={results}
                        values={values}
                    />
                ))}
            </div>
        </div>
    );
}
