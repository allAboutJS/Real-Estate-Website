import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard(props) {
    return (
        <Link href={`/blog/${props.slug}`} className="bg-white shadow-sm rounded-2xl p-4 flex flex-col gap-2">
            <Image
                src={props.featured_image_url || "/images/blank-doc.png"}
                alt={props.title}
                width={400}
                height={300}
                className="w-full block aspect-video rounded-lg flex-1"
            />
            <div>
                <p className="text-zinc-800 text-xs">
                    <i>Posted on 3rd January, 2024.</i>
                </p>
                <h3 className="text-lg font-semibold">{props.title}</h3>
                <p className="text-sm line-clamp-3">{props.summary}...</p>
            </div>
        </Link>
    );
}
