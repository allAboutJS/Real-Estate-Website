"use client";

import { useRouter } from "next/navigation";
import execCommand from "../_utils/execCommand";
import Link from "next/link";

export default function ActionButtons({ isDraft, archived, slug }) {
    const router = useRouter();

    return (
        <>
            <div className="max-w-screen-md flex justify-end mx-auto">
                <Link href={`/admin/dashboard/blog/edit/${slug}`} className="p-2 bg-black text-white">
                    EDIT
                </Link>
                {isDraft && (
                    <>
                        <button
                            onClick={() => execCommand("publish", slug, router)}
                            className="p-2 bg-green-600 text-white"
                        >
                            PUBLISH
                        </button>
                    </>
                )}
                {archived && (
                    <button
                        onClick={() => execCommand("publish", slug, router)}
                        className="p-2 bg-green-600 text-white"
                    >
                        PUBLISH
                    </button>
                )}
                {!isDraft && !archived && (
                    <button onClick={() => execCommand("archive", slug, router)} className="p-2 bg-zinc-600 text-white">
                        ARCHIVE
                    </button>
                )}
                <button onClick={() => execCommand("delete", slug, router)} className="p-2 bg-red-600 text-white">
                    DELETE
                </button>
            </div>
        </>
    );
}
