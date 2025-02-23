import getBlogPost from "@/app/_actions/getBlogPost";
import dynamic from "next/dynamic";

export const generateMetadata = async ({ params, searchParams }) => {
    const { slug } = params;
    const { data } = await getBlogPost(slug);

    return {
        title: `Editing: ${data?.title}`
    };
};

const Editor = dynamic(() => import("./_components/Editor"), { ssr: false });

export default async function EditBlogPost({ params }) {
    const { slug } = params;
    const { success, data } = await getBlogPost(slug);

    return (
        <main className="space-y-8">
            <h1 className="text-3xl font-bold">Edit Blog Post</h1>
            <Editor {...{ ...data, slug }} />
        </main>
    );
}
