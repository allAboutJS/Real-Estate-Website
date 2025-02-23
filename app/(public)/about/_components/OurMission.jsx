import Image from "next/image";

export default function OurMission() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 overflow-hidden max-w-screen-lg mx-auto items-center gap-4">
            <Image
                height={350}
                width={350}
                src="/images/people-business-meeting.jpg"
                className="w-full h-full object-cover rounded-2xl"
                alt="People in a business meeting"
            />
            <div>
                <h2 className="text-3xl relative w-fit after:absolute after:h-2 after:w-1/2 after:bottom-1 after:bg-orange-400 after:right-0 after:-z-10">
                    Our Mission
                </h2>
                <p className="text-zinc-600">
                    Our mission is to redefine the real estate experience by providing personalized, professional, and
                    innovative services that meet the unique needs of every client. Whether you&apos;re buying, selling,
                    or investing, we are here to make the process seamless and rewarding.
                </p>
            </div>
        </section>
    );
}
