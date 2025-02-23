import { unstable_noStore } from "next/cache";
import BlogPostCard from "./BlogPostCard";
import getBlogPostsMetadata from "@/app/_actions/getBlogPostsMetadata";

export default async function LatestBlogPosts() {
    unstable_noStore();
    const { success, data } = await getBlogPostsMetadata(4, true);

    return (
        <section>
            <h2 className="text-3xl text-center">Latest Blog Posts</h2>
            <p className="text-zinc-600 text-center">
                Read our most recent articles on all topics related to real estate in Nigeria
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 max-w-screen-xl mx-auto">
                {data.map((post) => (
                    <BlogPostCard key={post.slug} {...post} />
                ))}
            </div>
        </section>
    );
}
