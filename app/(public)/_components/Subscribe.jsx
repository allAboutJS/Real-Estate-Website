export default function Subscribe() {
    return (
        <section className="py-6">
            <h2 className="text-3xl text-center">Join The Elite. Subscribe To Our Newsletter</h2>
            <p className="text-center text-zinc-600">
                Subscribe to get timely updates when we list new properties and post new articles
            </p>
            <form className="mt-8 flex gap-1 text-sm w-full max-w-screen-sm m-auto bg-white shadow-sm p-1 rounded-full">
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="p-2 flex-1 rounded-xl outline-none"
                    placeholder="Enter your email to subscribe..."
                />
                <button className="py-2 px-4 bg-zinc-600 text-white rounded-full">SUBSCRIBE</button>
            </form>
        </section>
    );
}
