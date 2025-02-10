import Autocomplete from "@/app/_components/Autocomplete";
import { CgOptions } from "react-icons/cg";

export default function Hero() {
    return (
        <section className="hero min-h-60 flex flex-col text-white items-center justify-center gap-3 py-16 px-6 relative">
            <p className="text-sm px-2 py-1 rounded-full border w-fit">STAY UP TO DATE</p>
            <h1 className="text-4xl font-semibold">Our Blog</h1>
            <SearchBar />
        </section>
    );
}

function SearchBar() {
    return (
        <form className="flex items-end p-2 bg-white text-sm text-zinc-800 gap-2 mt-6 w-full max-w-lg">
            <div className="input-field w-full">
                <Autocomplete placeholder="Select type" options={[]} className="bg-slate-100 rounded-sm p-1" />
            </div>
            <Filters />
            <button className="bg-black text-white p-1 px-2">SEARCH</button>
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
