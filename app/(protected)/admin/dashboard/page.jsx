export const metadata = {
    title: "Admin Dashboard"
};

export default function Dashboard() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold">Welcome Sir</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                <div className="bg-zinc-600 text-white p-4 space-y-2">
                    <div className="text-lg font-semibold">Messages</div>
                    <div className="text-4xl font-black">10</div>
                </div>
                <div className="bg-green-600 text-white p-4 space-y-2">
                    <div className="text-lg font-semibold">Properties</div>
                    <div className="text-4xl font-black">23</div>
                </div>
                <div className="bg-zinc-600 text-white p-4 space-y-2">
                    <div className="text-lg font-semibold">Articles</div>
                    <div className="text-4xl font-black">5</div>
                </div>
            </section>
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Messages</h2>
                <div className="text-center text-zinc-400 bg-white shadow-sm p-4">No messages</div>
            </section>
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Articles</h2>
                <div className="text-center text-zinc-400 bg-white shadow-sm p-4">No blog posts</div>
            </section>
            <section className="space-y-4">
                <h2 className="text-xl font-semibold">Properties</h2>
                <div className="text-center text-zinc-400 bg-white shadow-sm p-4">No properties</div>
            </section>
        </div>
    );
}
