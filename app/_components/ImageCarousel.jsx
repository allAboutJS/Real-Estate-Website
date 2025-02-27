"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";

export default function ImageCarousel({ assets }) {
    const [currentSlide, setCurrentSlide] = useState(1);
    const carouselRef = useRef(null);
    const timeoutRef = useRef(null); // For debouncing

    useEffect(() => {
        const width = carouselRef.current?.clientWidth;
        if (width) {
            carouselRef.current?.scrollTo({ left: width * (currentSlide - 1), behavior: "smooth" });
        }
    }, [currentSlide]);

    useEffect(() => {
        const updateSlideOnScroll = () => {
            if (!carouselRef.current) return;
            const { scrollLeft, clientWidth } = carouselRef.current;

            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                setCurrentSlide(Math.round(scrollLeft / clientWidth) + 1);
            }, 100);
        };

        const carousel = carouselRef.current;
        carousel?.addEventListener("scroll", updateSlideOnScroll);

        return () => {
            carousel?.removeEventListener("scroll", updateSlideOnScroll);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div className="overflow-hidden relative z-0">
            <div ref={carouselRef} className="snap-x snap-mandatory max-w-full overflow-auto flex h-max items-center">
                {assets?.map((asset) => (
                    <div key={asset.url} className="snap-always snap-end flex-1 min-w-full h-fit">
                        <Image width={800} height={600} src={asset.url} alt="" className="w-full h-auto rounded-lg" />
                    </div>
                ))}
            </div>
            {assets.length > 1 && (
                <>
                    {currentSlide > 1 && (
                        <button
                            onClick={() => setCurrentSlide((prev) => prev - 1)}
                            className="absolute bg-blue-100 bg-opacity-30 top-1/2 left-4 h-12 w-12 rounded-full -translate-y-1/2 flex items-center justify-center text-2xl text-blue-950"
                        >
                            <BiCaretLeft />
                        </button>
                    )}
                    {currentSlide < assets.length && (
                        <button
                            onClick={() => setCurrentSlide((prev) => prev + 1)}
                            className="absolute bg-blue-100 bg-opacity-30 top-1/2 right-4 h-12 w-12 rounded-full -translate-y-1/2 flex items-center justify-center text-2xl text-blue-950"
                        >
                            <BiCaretRight />
                        </button>
                    )}
                    <div className="absolute bottom-12 flex justify-center gap-2 bg-white bg-opacity-50 p-2 rounded-full left-1/2 -translate-x-1/2">
                        {assets.map((_, i) => (
                            <button
                                onClick={() => setCurrentSlide(i + 1)}
                                className={`${
                                    currentSlide === i + 1 ? "bg-blue-600" : "bg-blue-200"
                                } h-2 w-2 rounded-full`}
                                key={i}
                            ></button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
