import PropertyCard from "../../_components/PropertyCard";

export default function ArchivedProperties({ properties, success }) {
    const filteredProperties = properties.filter((property) => property.archived);

    return success ? (
        filteredProperties.length ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                ))}
            </section>
        ) : (
            <div className="text-center text-zinc-400 p-4 min-h-20 flex items-center justify-center">
                Nothing to display here.
            </div>
        )
    ) : (
        <div className="text-center text-zinc-400 p-4 min-h-20 flex items-center justify-center">
            An error occurred while retrieving your properties.
        </div>
    );
}
