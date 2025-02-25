import Input from "@/app/_components/Input";

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
        <form className="p-4 bg-white text-sm text-zinc-800 gap-2 mt-6 rounded-2xl shadow-lg w-full max-w-xl">
            <div className="flex gap-1 items-end">
                <div className="flex-1">
                    <Input label="Keyword" placeholder="Seach blog..." />
                </div>
                <button className="text-white bg-blue-600 py-2 px-4 rounded-md text-sm">SEARCH</button>
            </div>
        </form>
    );
}
