import Image from "next/image";
import ContactForm from "./ContactForm";

export default function ContactSection({ heading }) {
    return (
        <section className="bg-gray-200 grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <Image
                height={400}
                width={400}
                src="/images/skyscrapper.avif"
                alt="Skyscraper"
                className="w-full h-full object-cover"
            />
            <div className="p-6">
                <h2 className="text-3xl text-center">{heading}</h2>
                <p className="text-zinc-600 text-center">
                    Fill the form with the necessary information, submit, and we&apos;ll contact you immediately
                </p>
                <ContactForm />
            </div>
        </section>
    );
}
