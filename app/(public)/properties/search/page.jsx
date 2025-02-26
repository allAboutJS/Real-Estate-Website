import Hero from "../../_components/Hero";
import PropertyCard from "../../_components/PropertyCard";
import PropertiesListing from "../_component/PropertiesListing";
import searchProducts from "./_actions/searchProducts";

export const generateMetadata = async ({ searchParams }) => {
    const { query } = await searchParams;

    return {
        title: `Showing Search Results For: ${query} - Ebubeagu Properties`,
        opengraph: {
            title: `Showing Search Results For: ${query}`
        },
        twitter: {
            title: `Showing Search Results For: ${query}`
        }
    };
};

export default async function Search({ searchParams }) {
    const { query } = await searchParams;
    const { data, success } = await searchProducts(query, undefined, true);

    return (
        <main className="p-4 space-y-16">
            <Hero />
            <div className="space-y-6">
                <h3 className="capitalize text-xl font-semibold">Showing Search Results For: {query}</h3>
                <section>
                    {success ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 max-w-screen-xl mx-auto">
                            {data.map((post) => (
                                <PropertyCard key={post.id} {...post} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-red-400">Failed to fetch properties</p>
                    )}
                </section>
            </div>
        </main>
    );
}
