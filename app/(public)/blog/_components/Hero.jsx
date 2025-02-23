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
        <form className="max-sm:grid max-sm:grid-cols-1 sm:flex items-end p-4 bg-white text-sm text-zinc-800 gap-4 mt-6 rounded-2xl shadow-lg w-full max-w-lg">
            <div className="input-field w-full">
                <Autocomplete placeholder="Select type" options={[]} className="bg-slate-100 rounded-sm p-1" />
            </div>
            <Filters />
            <button className="bg-blue-600 text-white p-1 px-2 rounded-lg">SEARCH</button>
        </form>
    );
}

function Filters() {
    return (
        <div>
            <button
                type="button"
                className="px-2 py-1 border-blue-600 border flex gap-1 items-center rounded-lg text-blue-600"
            >
                <CgOptions /> Filter
            </button>
        </div>
    );
}
