"use client";

import { useRouter } from "next/navigation";
import execCommand from "../_utils/execCommand";
import Link from "next/link";

export default function ActionButtons({ table, slug }) {
    const router = useRouter();

    return (
        <>
            {table === "blog_drafts" && (
                <div className="max-w-screen-md flex justify-end mx-auto">
                    <Link
                        href={`/admin/dashboard/blog/edit/${slug}${table ? `?table=${table}` : ""}`}
                        className="p-2 bg-black text-white"
                    >
                        EDIT
                    </Link>
                    <button
                        onClick={() => execCommand("publish", table, slug, router)}
                        className="p-2 bg-green-600 text-white"
                    >
                        PUBLISH
                    </button>
                    <button
                        onClick={() => execCommand("delete", table, slug, router)}
                        className="p-2 bg-red-600 text-white"
                    >
                        DELETE
                    </button>
                </div>
            )}
            {table === "blog_archives" && (
                <div className="max-w-screen-md flex justify-end mx-auto">
                    <Link
                        href={`/admin/dashboard/blog/edit/${slug}${table ? `?table=${table}` : ""}`}
                        className="p-2 bg-black text-white"
                    >
                        EDIT
                    </Link>
                    <button
                        onClick={() => execCommand("publish", table, slug, router)}
                        className="p-2 bg-green-600 text-white"
                    >
                        PUBLISH
                    </button>
                    <button
                        onClick={() => execCommand("delete", table, slug, router)}
                        className="p-2 bg-red-600 text-white"
                    >
                        DELETE
                    </button>
                </div>
            )}
            {table !== "blog_archives" && table !== "blog_drafts" && (
                <div className="max-w-screen-md flex justify-end mx-auto">
                    <Link
                        href={`/admin/dashboard/blog/edit/${slug}${table ? `?table=${table}` : ""}`}
                        className="p-2 bg-black text-white"
                    >
                        EDIT
                    </Link>
                    <button
                        onClick={() => execCommand("archive", table, slug, router)}
                        className="p-2 bg-zinc-600 text-white"
                    >
                        ARCHIVE
                    </button>
                    <button
                        onClick={() => execCommand("delete", table, slug, router)}
                        className="p-2 bg-red-600 text-white"
                    >
                        DELETE
                    </button>
                </div>
            )}
        </>
    );
}
