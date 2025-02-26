import BlogPostCard from "../../_components/BlogPostCard";
import Hero from "../_components/Hero";
import searchBlogPosts from "./_actions/searchBlogPosts";

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
    const { data, success } = await searchBlogPosts(query, undefined);

    return (
        <main className="p-4 space-y-16">
            <Hero />
            <div className="space-y-6">
                <h3 className="capitalize text-3xl">Showing Search Results For: {query}</h3>
                <section>
                    {success ? (
                        data.length ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 max-w-screen-xl mx-auto">
                                {data.map((post) => (
                                    <BlogPostCard key={post.slug} {...post} />
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-zinc-800">No results were found for this search</p>
                        )
                    ) : (
                        <p className="text-center text-red-400">Failed to fetch properties</p>
                    )}
                </section>
            </div>
        </main>
    );
}
