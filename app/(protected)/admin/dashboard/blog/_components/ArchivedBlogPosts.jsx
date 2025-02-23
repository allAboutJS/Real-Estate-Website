import BlogPostCard from "../../_components/BlogPostCard";

export default function ArchivedBlogPosts({ posts, success }) {
    const filteredPosts = posts.filter((blog) => blog.archived);

    return success ? (
        filteredPosts.length ? (
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPosts.map((blog) => (
                    <BlogPostCard key={blog.slug} {...blog} />
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
