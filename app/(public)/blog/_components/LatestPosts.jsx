import getBlogPostsMetadata from "@/app/_actions/getBlogPostsMetadata";
import BlogPostCard from "../../_components/BlogPostCard";

export default async function LatestPosts() {
    const { success, data } = await getBlogPostsMetadata(4);

    return (
        <section className="space-y-6 max-w-screen-xl m-auto">
            <h2 className="text-3xl">Latest Posts</h2>
            <div className="lg:grid-cols-2 grid gap-4">
                {success && (
                    <>
                        <BlogPostCard {...data[0]} />
                        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                            {data.slice(1).map((post) => (
                                <BlogPostCard {...post} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
