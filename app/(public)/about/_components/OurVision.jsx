import Image from "next/image";

export default function OurVision() {
    return (
        <section className="md:grid md:grid-cols-2  flex max-md:flex-col-reverse overflow-hidden max-w-screen-lg mx-auto items-center gap-4">
            <div>
                <h2 className="text-3xl relative w-fit after:absolute after:h-2 after:w-1/2 after:bottom-1 after:bg-orange-400 after:right-0 after:-z-10">
                    Our Vision
                </h2>
                <p className="text-zinc-600">
                    We envision a world where real estate transactions are stress-free and empowering, where everyone
                    has the opportunity to find their perfect space to live, work, or grow.
                </p>
            </div>
            <Image
                height={350}
                width={350}
                src="/images/man-looking-at-the-stars-through-a-telescope.jpg"
                className="w-full h-full object-cover rounded-2xl"
                alt="Man looking at the stars through a telescope"
            />
        </section>
    );
}
