import Link from "next/link";
import { CgMathPlus } from "react-icons/cg";
import Tabs from "../_components/Tabs";
import { Suspense } from "react";
import PublishedBlogPosts from "./_components/PublishedBlogPosts";
import PostsOptimisticUi from "./_components/PostsOptimisticUi";
import DraftedBlogPosts from "./_components/DraftedBlogPosts";
import ArchivedBlogPosts from "./_components/ArchivedBlogPosts";

export const metadata = {
    title: "Admin Dashboard - Blog"
};

export default function Blog() {
    return (
        <div className="space-y-8">
            <section className="flex justify-between">
                <h1 className="text-3xl font-bold">Blog Posts</h1>
                <Link
                    className="bg-zinc-600 text-white py-2 px-4 justify-center flex items-center gap-2 rounded-lg"
                    href="./blog/create"
                >
                    <CgMathPlus /> CREATE
                </Link>
            </section>
            <Tabs
                data={[
                    {
                        label: "Published",
                        component: (
                            <Suspense fallback={<PostsOptimisticUi />}>
                                <PublishedBlogPosts />
                            </Suspense>
                        )
                    },
                    {
                        label: "Archived",
                        component: (
                            <Suspense fallback={<PostsOptimisticUi />}>
                                <ArchivedBlogPosts />
                            </Suspense>
                        )
                    },
                    {
                        label: "Drafts",
                        component: (
                            <Suspense fallback={<PostsOptimisticUi />}>
                                <DraftedBlogPosts />
                            </Suspense>
                        )
                    }
                ]}
            />
        </div>
    );
}
