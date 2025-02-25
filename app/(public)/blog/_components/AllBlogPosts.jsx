import getBlogPostsMetadata from "@/app/_actions/getBlogPostsMetadata";
import BlogPostCard from "../../_components/BlogPostCard";

export default async function AllBlogPosts() {
    const { success, data } = await getBlogPostsMetadata(4);

    return (
        <section className="max-w-screen-xl m-auto">
            <h2 className="text-3xl">All Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                {success && data.slice(4).map((post) => <BlogPostCard {...post} />)}
            </div>
        </section>
    );
}
