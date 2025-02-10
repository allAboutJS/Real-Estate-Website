import Image from "next/image";

export default function LetsWorkTogether() {
    return (
        <section
            style={{ marginBottom: 36 }}
            className="grid grid-cols-1 md:grid-cols-2 overflow-hidden max-w-screen-lg mx-auto items-center gap-4"
        >
            <Image
                height={350}
                width={350}
                src="/images/handshake.jpg"
                alt="Men shaking hands"
                className="w-full h-full object-cover"
            />
            <div>
                <h2 className="text-3xl relative w-fit after:absolute after:h-2 after:w-1/2 after:bottom-1 after:bg-orange-400 after:right-0 after:-z-10">
                    Let's Work Together
                </h2>
                <p className="text-zinc-600">
                    Whether you’re a first-time home buyer, a seasoned investor, or a business looking to expand, we’re
                    here to guide you every step of the way. Explore our listings, consult with our expert team, and
                    discover the difference <b>Ebube Agu Properties Ltd.</b> can make in your real estate journey.
                </p>
                <p>
                    <b>Your dream property is just a call away. Let’s make it happen together.</b>
                </p>
            </div>
        </section>
    );
}
