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
            <h2 className="text-center text-3xl text-blue-800">What We Offer</h2>
            <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2 max-w-screen-xl mx-auto">
                {offers.map((offer, index) => (
                    <li
                        className="p-4 flex flex-col justify-center bg-purple-200 text-black rounded-lg"
                        key={offer.offer}
                    >
                        <h3 className="text-xl mb-2">{offer.offer}</h3>
                        <p className="text-black/85">{offer.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
