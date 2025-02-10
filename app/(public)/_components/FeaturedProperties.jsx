import PropertyCard from "./PropertyCard";

const demoProperties = [];

export default function FeaturedProperties() {
    return (
        <section>
            <h2 className="text-3xl text-center">Featured Properties</h2>
            <p className="text-zinc-600 text-center">Checkout properties handpicked specially for you</p>
            <div>
                {demoProperties.map((property) => (
                    <PropertyCard key={property.id} />
                ))}
            </div>
        </section>
    );
}
