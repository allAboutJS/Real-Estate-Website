import Image from "next/image";
import BlogPostCard from "../../_components/BlogPostCard";

export default function LatestPosts() {
    return (
        <section className="space-y-6 max-w-screen-xl m-auto">
            <h2 className="text-3xl">Latest Posts</h2>
            <div className="lg:grid-cols-2 grid gap-4">
                <BlogPostCard />
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                    <BlogPostCard />
                    <BlogPostCard />
                    <BlogPostCard />
                    <BlogPostCard />
                </div>
            </div>
        </section>
    );
}
