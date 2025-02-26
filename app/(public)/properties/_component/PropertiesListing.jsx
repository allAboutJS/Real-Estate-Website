import getPropertiesMetadata from "@/app/_actions/getPropertiesMetadata";
import PropertyCard from "../../_components/PropertyCard";

export default async function PropertiesListing() {
    const { success, data } = await getPropertiesMetadata(undefined, true);

    return (
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
    );
}
