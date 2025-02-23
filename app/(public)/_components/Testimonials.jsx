export default function Testimonials() {
    const testimonials = [
        {
            testifier: "John Doe",
            testimony:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non illo rem numquam nesciunt dolore, excepturi error et temporibus natus."
        },
        {
            testifier: "Janet Dawson",
            testimony:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla repellendus quia voluptas debitis culpa pariatur impedit officiis nisi saepe."
        },
        {
            testifier: "John Doe",
            testimony:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident non illo rem numquam nesciunt dolore, excepturi error et temporibus natus."
        }
    ];

    return (
        <section className="bg-gradient-to-r from-zinc-400 to-zinc-700 px-6 py-16 max-w-screen-xl mx-auto rounded-2xl">
            <h2 className="text-3xl text-center text-white">What Our Customers Are Saying</h2>
            <p className="text-white/70 text-center">
                We&apos;ve served numerous clients and here&apos;s what a few have got to say about us
            </p>
            <div className="max-w-screen-lg m-auto grid grid-cols-1 md:grid-cols-3 gap-2 mt-12">
                {testimonials.map((testimony) => (
                    <blockquote
                        className="bg-zinc-300 text-zinc-900 p-4 hover:shadow-md rounded-2xl"
                        key={testimony.testifier}
                    >
                        <p>{testimony.testimony}</p>
                        <p className="text-right">
                            <i>
                                -- <b>{testimony.testifier}</b>
                            </i>
                        </p>
                    </blockquote>
                ))}
            </div>
        </section>
    );
}
