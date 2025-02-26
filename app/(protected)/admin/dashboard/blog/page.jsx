import Link from "next/link";
import { CgMathPlus } from "react-icons/cg";
import Tabs from "../_components/Tabs";
import PublishedBlogPosts from "./_components/PublishedBlogPosts";
import DraftedBlogPosts from "./_components/DraftedBlogPosts";
import ArchivedBlogPosts from "./_components/ArchivedBlogPosts";
import { unstable_noStore } from "next/cache";
import getBlogPostsMetadata from "@/app/_actions/getBlogPostsMetadata";

export const metadata = {
    title: "Admin Dashboard - Blog"
};

export default async function Blog() {
    unstable_noStore();
    const { success, data } = await getBlogPostsMetadata();

    return (
        <div className="space-y-8">
            <section className="flex justify-between">
                <h1 className="text-3xl font-bold">Blog Posts</h1>
                <Link
                    className="bg-blue-600 text-white py-2 px-4 justify-center flex items-center gap-2 rounded-lg"
                    href="./blog/create"
                >
                    <CgMathPlus /> CREATE
                </Link>
            </section>
            <Tabs
                data={[
                    {
                        label: "Published",
                        component: <PublishedBlogPosts posts={data} success={success} />
                    },
                    {
                        label: "Archived",
                        component: <ArchivedBlogPosts posts={data} success={success} />
                    },
                    {
                        label: "Drafts",
                        component: <DraftedBlogPosts posts={data} success={success} />
                    }
                ]}
            />
        </div>
    );
}
