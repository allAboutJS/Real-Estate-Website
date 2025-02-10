import getBlogPost from "@/app/_actions/getBlogPost";
import dynamic from "next/dynamic";

export const generateMetadata = async ({ params, searchParams }) => {
    const { slug } = params;
    const { table } = searchParams;
    const { data } = await getBlogPost(slug, table);

    return {
        title: `Editing: ${data?.title}`
    };
};

const Editor = dynamic(() => import("./_components/Editor"), { ssr: false });

export default async function EditBlogPost({ params, searchParams }) {
    const { slug } = params;
    const { table } = searchParams;
    const { success, data } = await getBlogPost(slug, table);

    return (
        <main className="space-y-8">
            <h1 className="text-3xl font-bold">Edit Blog Post</h1>
            <Editor {...{ ...data, table, slug }} />
        </main>
    );
}
