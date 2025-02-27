import BlogPostCard from "@/app/(public)/_components/BlogPostCard";
import getBlogPostsMetadata from "@/app/_actions/getBlogPostsMetadata";
import { unstable_noStore } from "next/cache";

export default async function OtherBlogPosts({ slug }) {
    unstable_noStore();
    const { success, data } = await getBlogPostsMetadata(4, true);

    return (
        <div className="space-y-4 p-4">
            <h3 className="text-2xl">Other Article You May Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mt-6">
                {success &&
                    data.filter((post) => post.slug !== slug).map((post) => <BlogPostCard key={post.id} {...post} />)}
            </div>
        </div>
    );
}
