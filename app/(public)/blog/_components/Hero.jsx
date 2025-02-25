import Autocomplete from "@/app/_components/Autocomplete";
import { CgOptions } from "react-icons/cg";

export default function Hero() {
    return (
        <section className="hero min-h-60 flex flex-col text-white items-center justify-center gap-3 py-16 px-6 relative rounded-2xl">
            <p className="text-sm px-2 py-1 rounded-full border w-fit">STAY UP TO DATE</p>
            <h1 className="text-4xl font-semibold">Our Blog</h1>
            <SearchBar />
        </section>
    );
}

function SearchBar() {
    return (
        <form className="max-sm:grid max-sm:grid-cols-1 sm:flex items-end p-4 bg-white text-sm text-zinc-800 gap-2 mt-6 w-full max-w-lg rounded-2xl shadow-lg">
            <div className="input-field flex-1">
                <label htmlFor="keyword">Keyword</label>
                <input className="min-w-0 bg-slate-100 rounded-sm p-1" type="text" placeholder="Enter keyword..." />
            </div>
            <div className="flex justify-center gap-1">
                <Filters />
                <button className="text-white bg-blue-600 p-1 px-2 rounded-md text-sm flex-1">SEARCH</button>
            </div>
        </form>
    );
}

function Filters() {
    return (
        <div className="flex-1">
            <button
                type="button"
                className="px-2 py-1 border-blue-600 border flex gap-1 items-center justify-center rounded-lg text-blue-600 w-full"
            >
                <CgOptions /> Filter
            </button>
        </div>
    );
}
