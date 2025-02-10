import Hero from "./_components/Hero";
import LetsWorkTogether from "./_components/LetsWorkTogether";
import OurMission from "./_components/OurMission";
import OurVision from "./_components/OurVision";
import WhatWeOffer from "./_components/WhatWeOffer";
import WhoWeAre from "./_components/WhoWeAre";
import WhyChooseUs from "./_components/WhyChooseUs";

export const metadata = {
    title: "About - Ebube Agu Real Estate Company"
};

export default function AboutPage() {
    return (
        <main className="p-4 space-y-16">
            <Hero />
            <WhoWeAre />
            <OurMission />
            <OurVision />
            <WhatWeOffer />
            <WhyChooseUs />
            <LetsWorkTogether />
        </main>
    );
}
