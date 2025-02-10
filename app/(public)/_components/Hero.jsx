import { CgOptions } from "react-icons/cg";
import Autocomplete from "../../_components/Autocomplete";

export default function Hero() {
    return (
        <section className="hero min-h-60 flex flex-col text-white items-center justify-center gap-3 py-16 px-6 relative">
            <p className="text-sm px-2 py-1 rounded-full border w-fit">LET US HELP YOU</p>
            <h1 className="text-4xl font-semibold text-center">Find Your Next Property</h1>
            <SearchBar />
            <div className="absolute -bottom-6 max-sm:-bottom-10 bg-white flex items-center p-4 left-1/2 -translate-x-1/2 text-zinc-800 shadow-md justify-around text-center gap-1">
                <div className="font-semibold">5 Awards</div>
                <span className="text-slate-300">|</span>
                <div className="font-semibold">120+ Customers</div>
                <span className="text-slate-300">|</span>
                <div className="font-semibold">100+ Properties</div>
            </div>
        </section>
    );
}

function SearchBar() {
    return (
        <form className="max-sm:grid max-sm:grid-cols-1 sm:flex items-end p-2 bg-white text-sm text-zinc-800 gap-2 mt-6 w-full max-w-fit">
            <div className="grid grid-cols-2 gap-1">
                <div className="input-field">
                    <label htmlFor="keyword">Keyword</label>
                    <input className="min-w-0 bg-slate-100 rounded-sm p-1" type="text" placeholder="Enter keyword..." />
                </div>
                <div className="input-field">
                    <label htmlFor="type">Type</label>
                    <Autocomplete
                        placeholder="Select type"
                        options={[
                            { label: "Landed Properties", value: "land" },
                            { label: "Houses and Buildings", value: "building" }
                        ]}
                        className="bg-slate-100 rounded-sm p-1"
                    />
                </div>
            </div>
            <div className="flex justify-center gap-1">
                <Filters />
                <button className="bg-black text-white p-1 px-2">SEARCH</button>
            </div>
        </form>
    );
}

function Filters() {
    return (
        <div>
            <button type="button" className="px-2 py-1 border-slate-600 border flex gap-1 items-center">
                <CgOptions /> Filter
            </button>
        </div>
    );
}
