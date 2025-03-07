import Image from "next/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { CgEye } from "react-icons/cg";

export default function BlogPostCard({ featured_image_url, title, summary, slug, created_at, last_updated_at }) {
    return (
        <div className="bg-white shadow flex flex-col rounded-xl p-4">
            <Image
                src={featured_image_url || "/images/blank-doc.png"}
                alt={title}
                width={400}
                height={300}
                className="w-full block aspect-video flex-1 rounded-lg"
            />
            <div className="p-2">
                <p className="text-zinc-800 text-xs">
                    <i>
                        {last_updated_at ? "Updated" : "Posted"} on{" "}
                        {last_updated_at
                            ? new Date(last_updated_at).toDateString()
                            : new Date(created_at).toDateString()}
                        .
                    </i>
                </p>
                <h3 className="text-lg capitalize font-semibold">{title}</h3>
                {summary && <p className="text-sm line-clamp-3">{summary}</p>}
            </div>
            <div className="grid text-sm font-semibold gap-1 p-1 grid-cols-2">
                <Link
                    className="hover:bg-zinc-200 bg-zinc-100 flex justify-center items-center gap-1 p-2"
                    href={`/admin/dashboard/blog/${slug}`}
                >
                    View <CgEye />
                </Link>
                <Link
                    className="hover:bg-zinc-200 bg-zinc-100 flex justify-center items-center gap-1 p-2"
                    href={`/admin/dashboard/blog/edit/${slug}`}
                >
                    Edit <BiEdit />
                </Link>
            </div>
        </div>
    );
}
