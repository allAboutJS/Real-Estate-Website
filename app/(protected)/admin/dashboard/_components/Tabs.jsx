"use client";

import { useState } from "react";

export default function Tabs({ data }) {
    const [activeTab, setActiveTab] = useState(data[0]);
    const labels = data.map((tab) => tab.label);

    return (
        <div>
            <div>
                {labels.map((label) => (
                    <button
                        key={label}
                        className={`${
                            activeTab.label === label ? "bg-zinc-800 text-white" : "bg-zinc-200 text-zinc-800"
                        } px-4 py-2 text-sm font-semibold border-r first:rounded-tl-xl last:rounded-tr-xl last:border-none border-r-zinc-400`}
                        onClick={() => setActiveTab(data.find((tab) => tab.label === label))}
                    >
                        {label.toUpperCase()}
                    </button>
                ))}
            </div>
            <div className="bg-white/60 p-4 shadow-sm rounded-b-xl rounded-tr-xl">
                {activeTab.component || (
                    <div className="text-center text-zinc-400 min-h-20 flex justify-center items-center">
                        There&apos;s nothing here.
                    </div>
                )}
            </div>
        </div>
    );
}
