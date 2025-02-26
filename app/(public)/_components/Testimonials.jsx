"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(1);
    const testimonialsContainer = useRef(null);
    const testimonials = [
        {
            testifier: "Onah Victor",
            testimony:
                "Ebubeagu Properties made my dream of owning a home a reality. Their professionalism and dedication to client satisfaction are unmatched. I highly recommend them to anyone looking for a seamless property acquisition experience."
        },
        {
            testifier: "Somto Ani",
            testimony:
                "Finding a reliable real estate company can be challenging, but Ebubeagu Properties exceeded my expectations. They guided me through every step of purchasing my first investment property, ensuring transparency and a smooth transaction."
        },
        {
            testifier: "Okonkwo Rita",
            testimony:
                "I was impressed with how quickly Ebubeagu Properties helped me secure a perfect home within my budget. Their team is friendly, knowledgeable, and genuinely cares about their clients' needs. I'm grateful for their exceptional service!"
        }
    ];

    useEffect(() => {
        const width = testimonialsContainer.current?.clientWidth;

        testimonialsContainer.current?.scroll({ left: width * (currentSlide - 1) });
    }, [currentSlide]);

    useEffect(() => {
        let interval;
        const stopAnimationOnScroll = () => {
            clearInterval(interval);
        };
        const beginAnimation = () => {
            setTimeout(() => {
                interval = setInterval(
                    () => setCurrentSlide((prev) => (prev >= testimonials.length ? 1 : prev + 1)),
                    4000
                );
            }, 4000);
        };
        interval = setInterval(() => setCurrentSlide((prev) => (prev >= testimonials.length ? 1 : prev + 1)), 4000);

        testimonialsContainer.current?.addEventListener("scroll", stopAnimationOnScroll);
        testimonialsContainer.current?.addEventListener("scrollend", beginAnimation);
        testimonialsContainer.current?.addEventListener("mouseenter", stopAnimationOnScroll);
        testimonialsContainer.current?.addEventListener("mouseout", beginAnimation);

        return () => {
            clearInterval(interval);
            testimonialsContainer.current?.removeEventListener("scroll", stopAnimationOnScroll);
            testimonialsContainer.current?.removeEventListener("scrollend", beginAnimation);
            testimonialsContainer.current?.removeEventListener("mouseenter", stopAnimationOnScroll);
            testimonialsContainer.current?.removeEventListener("mouseout", beginAnimation);
        };
    }, []);

    return (
        <section className="bg-gradient-to-tr from-blue-400 to-blue-700 px-6 py-16 max-w-screen-xl mx-auto rounded-2xl">
            <h2 className="text-3xl text-center text-white">What Our Customers Are Saying</h2>
            <p className="text-white/70 text-center">
                We&apos;ve served numerous clients and here&apos;s what a few have got to say about us
            </p>
            <div
                ref={testimonialsContainer}
                className="max-w-screen-md m-auto flex overflow-auto mt-8 snap-x snap-mandatory"
            >
                {testimonials.map((testimony) => (
                    <blockquote
                        className="bg-blue-100 text-blue-900 p-4 min-w-full rounded-lg snap-center snap-always"
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
            <div className="flex justify-center items-center gap-1 mt-4">
                {testimonials.map((_, i) => (
                    <span
                        key={i}
                        className={`${
                            i === currentSlide - 1 ? "bg-white w-12" : "bg-blue-200 w-4"
                        } inline-block h-1 rounded-full transition`}
                    ></span>
                ))}
            </div>
        </section>
    );
}
