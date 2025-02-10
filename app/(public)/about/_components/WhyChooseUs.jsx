import { FaHandshake, FaLightbulb, FaLocationArrow, FaLock } from "react-icons/fa6";

const whyChooseUs = [
    {
        offer: "Local Expertise",
        description:
            "Our deep understanding of the local market ensures we provide tailored solutions for your real estate needs.",
        icon: <FaLocationArrow className="text-xl text-zinc-500 float-right" />
    },
    {
        offer: "Customer-Centric Approach",
        description: "We prioritize your needs, preferences, and goals at every step of the journey.",
        icon: <FaHandshake className="text-xl text-zinc-500 float-right" />
    },
    {
        offer: "Innovative Solutions",
        description: "Leveraging the latest technology and market insights to deliver superior results.",
        icon: <FaLightbulb className="text-xl text-zinc-500 float-right" />
    },
    {
        offer: "Integrity and Trust",
        description: "Our foundation is built on honesty, transparency, and long-lasting client relationships.",
        icon: <FaLock className="text-xl text-zinc-500 float-right" />
    }
];

export default function WhyChooseUs() {
    return (
        <section className="bg-stone-200 p-6">
            <h2 className="text-center text-3xl">Why Choose Us?</h2>
            <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-1 max-w-screen-lg mx-auto">
                {whyChooseUs.map((reason) => (
                    <li className="bg-zinc-50 p-4 border hover:shadow-lg">
                        {reason.icon}
                        <div className="clear-both"></div>
                        <h3 className="z-20 text-xl mb-2">{reason.offer}</h3>
                        <p className="z-20 text-zinc-800">{reason.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
