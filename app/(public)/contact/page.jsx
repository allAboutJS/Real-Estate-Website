import Hero from "./_components/Hero";
import GetInTouch from "./_components/GetInTouch";
import ContactSection from "../_components/ContactSection";

export const metadata = {
    title: "Contact - Ebube Agu Real Estate Company"
};

export default function ContactPage() {
    return (
        <main className="p-4 space-y-16">
            <Hero />
            <GetInTouch />
            <ContactSection heading={"Send Us A Message"} />
        </main>
    );
}
