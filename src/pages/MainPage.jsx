import { useState } from "react";
import { CentralPanel } from "../components/CentralPanel";
import { LeftPanel } from "../components/LeftPanel";
import { RightPanel } from "../components/RightPanel";

export function MainPage() {
    const lsValues = JSON.parse(localStorage.getItem("values"));
    const lsResults = JSON.parse(localStorage.getItem("results"));
    const [values, setValues] = useState(
        lsValues
            ? lsValues
            : {
                  cyan: null,
                  emerald: null,
                  lime: null,
                  yellow: null,
                  orange: null,
                  red: null,
                  black: null,
              }
    );
    const [results, setResults] = useState(lsResults ? lsResults : []);

    return (
        <div className="bg-slate-300 min-h-screen w-screen flex justify-between">
            <LeftPanel values={values} results={results} />
            <CentralPanel
                results={results}
                setResults={setResults}
                values={values}
            />
            <RightPanel values={values} setValues={setValues} />
        </div>
    );
}
