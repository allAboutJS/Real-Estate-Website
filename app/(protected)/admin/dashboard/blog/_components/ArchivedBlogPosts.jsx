import { unstable_noStore } from "next/cache";
import fetchBlogPostsMetadata from "../../../../../_actions/getBlogPostsMetadata";
import BlogPostCard from "../../_components/BlogPostCard";

export default async function ArchivedBlogPosts() {
    unstable_noStore();
    const { success, data } = await fetchBlogPostsMetadata("blog_archives");

    return success ? (
        data.length ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((blog) => (
                    <BlogPostCard key={blog.slug} {...{ ...blog, archived: true }} />
                ))}
            </section>
        ) : (
            <div className="text-center text-zinc-400 p-4 min-h-20 flex items-center justify-center">
                Nothing to display here.
            </div>
        )
    ) : (
        <div className="text-center text-zinc-400 p-4 min-h-20 flex items-center justify-center">
            An error occurred while retrieving information from your archives.
        </div>
    );
}
