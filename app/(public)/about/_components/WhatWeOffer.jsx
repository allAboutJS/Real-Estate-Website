import Image from "next/image";

const offers = [
    {
        offer: "Residential Properties",
        description:
            "From cozy apartments to luxurious estates, we connect you with homes that suit your lifestyle and budget.",
        bg_image_url: "/images/residential-houses.jpg"
    },
    {
        offer: "Commercial Properties",
        description: "Helping businesses find the perfect spaces to grow and thrive.",
        bg_image_url: "/images/residential-houses.jpg"
    },
    {
        offer: "Property Management",
        description: "Offering comprehensive management solutions to maximize the value of your investments.",
        bg_image_url: "/images/residential-houses.jpg"
    },
    {
        offer: "Real Estate Investment Guidance",
        description: "Empowering you to make informed decisions in a dynamic market.",
        bg_image_url: "/images/residential-houses.jpg"
    }
];

export default function WhatWeOffer() {
    return (
        <section>
            <h2 className="text-center text-3xl">What We Offer</h2>
            <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 max-w-screen-lg mx-auto border bg-zinc-100 shadow-md">
                {offers.map((offer, index) => (
                    <li
                        className={`${
                            index < 2 && "sm:border-b"
                        } p-4 text-center flex flex-col justify-center sm:odd:border-r max-sm:border-b lg:border-r last:border-none`}
                        key={offer.offer}
                    >
                        <h3 className="text-xl mb-2 underline">{offer.offer}</h3>
                        <p className="text-zinc-800">{offer.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
