export default function Subscribe() {
    return (
        <section className="py-6">
            <h2 className="text-3xl text-center">Join The Elite. Subscribe To Our Newsletter</h2>
            <p className="text-center text-zinc-600">
                Subscribe to get timely updates when we list new properties and post new articles
            </p>
            <form className="mt-8 flex gap-1 text-sm w-full max-w-screen-sm m-auto">
                <input type="email" name="email" id="email" className="p-2 border border-zinc-600 flex-1" />
                <button className="p-2 bg-black text-white">SUBSCRIBE</button>
            </form>
        </section>
    );
}
