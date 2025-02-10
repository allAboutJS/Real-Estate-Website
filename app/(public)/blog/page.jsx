import Pagination from "@/app/_components/Pagination";
import AllBlogPosts from "./_components/AllBlogPosts";
import Hero from "./_components/Hero";
import LatestPosts from "./_components/LatestPosts";

export const metadata = {
    title: "Blog - Ebube Agu Real Estate Company"
};

export default function BlogsPage() {
    return (
        <main className="space-y-12 p-4">
            <Hero />
            <LatestPosts />
            <AllBlogPosts />
            <Pagination currentPage={1} limit={7} totalPages={12} />
        </main>
    );
}
