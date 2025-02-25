import Hero from "../_components/Hero";
import PropertiesListing from "./_component/PropertiesListing";

export default function Properties() {
    return (
        <main className="p-4 space-y-16">
            <Hero />
            <PropertiesListing />
        </main>
    );
}
