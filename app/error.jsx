"use client";

import Link from "next/link";

export default function Error({ reset }) {
    return (
        <div className="min-h-screen relative bg-gradient-to-b from-zinc-100 to-white text-center p-4 flex flex-col justify-center items-center gap-2">
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-12 top-[10%] left-[4%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-24 top-[2%] left-[40%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-16 top-[60%] right-[20%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-8 bottom-[60%] right-[10%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-12 top-[40%] left-[50%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-12 top-[70%] left-[10%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-16 top-[2%] right-[5%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-24 top-[15%] right-[25%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-32 bottom-[15%] right-[45%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-32 bottom-[25%] left-[5%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-24 top-[25%] left-[15%]"></div>
            <div className="absolute aspect-square rounded-full bg-zinc-700 bg-opacity-[0.05] z-[0] backdrop-blur-lg h-16 bottom-0 right-[85%]"></div>
            <h1 className="font-black text-6xl z-50">Oops!</h1>
            <p className="text-lg font-semibold z-50">The application crashed</p>
            <p className="z-50">
                <Link className="text-zinc-600 hover:underline" href={"#"} onClick={() => reset()}>
                    Try again
                </Link>{" "}
                or go{" "}
                <Link className="text-zinc-600 hover:underline" href={"/"}>
                    home
                </Link>
                .
            </p>
        </div>
    );
}
