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
                className="w-full h-full object-cover rounded-2xl"
            />
            <div>
                <h2 className="text-3xl relative w-fit text-blue-800">Let&apos;s Work Together</h2>
                <p className="text-zinc-600">
                    Whether you&apos;re a first-time home buyer, a seasoned investor, or a business looking to expand,
                    we&apos;re here to guide you every step of the way. Explore our listings, consult with our expert
                    team, and discover the difference <b>Ebube Agu Properties Ltd.</b> can make in your real estate
                    journey.
                </p>
                <p>
                    <b>Your dream property is just a call away. Let&apos;s make it happen together.</b>
                </p>
            </div>
        </section>
    );
}
