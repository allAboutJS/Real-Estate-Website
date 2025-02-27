import Image from "next/image";

export default function OurTeam() {
    return (
        <section className="max-w-screen-md mx-auto space-y-12">
            <h2 className="text-center text-3xl text-blue-800">Meet Our Team</h2>
            <div className="flex justify-around items-center gap-6 flex-wrap">
                <div className="flex flex-col items-center gap-2">
                    <Image height={200} width={200} className="rounded-full" src="/images/ceo.jpg" />
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">Barr. Fidelis Madukaife Ani</h3>
                        <p>Legal Adviser</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image height={200} width={200} className="rounded-full" src="/images/manager.jpg" />
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">Mrs. Ogueche Grace Amuche</h3>
                        <p>Manager</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Image height={200} width={200} className="rounded-full" src="/images/secretary-1.jpg" />
                    <div className="text-center">
                        <h3 className="text-lg font-semibold">Mrs. Joy Ifeoma Ani</h3>
                        <p>Secretary</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
