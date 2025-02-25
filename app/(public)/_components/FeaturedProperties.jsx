import getPropertiesMetadata from "@/app/_actions/getPropertiesMetadata";
import PropertyCard from "./PropertyCard";

const demoProperties = [];

export default async function FeaturedProperties() {
    const { success, data } = await getPropertiesMetadata(4, true);

    return (
        <section>
            <h2 className="text-3xl text-center">Featured Properties</h2>
            <p className="text-zinc-600 text-center">Checkout properties handpicked specially for you</p>
            <div>
                {success ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 max-w-screen-xl mx-auto">
                        {data.map((post) => (
                            <PropertyCard key={post.id} {...post} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-red-400">Failed to fetch blog posts</p>
                )}
            </div>
        </section>
    );
}
