"use client";

import { useRouter } from "next/navigation";

export default function BlogBody({ success, data }) {
    const router = useRouter();

    if (!success) return router.replace("/blog"), null;
    return (
        <div>
            <div className="blog">
                <h1 className="text-blue-900">{data.title}</h1>
                <div className="text-justify" dangerouslySetInnerHTML={{ __html: data.body }}></div>
            </div>
        </div>
    );
}
