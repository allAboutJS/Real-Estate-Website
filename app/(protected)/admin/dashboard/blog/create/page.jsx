import Editor from "./_components/Editor";
import dynamic from "next/dynamic";

export const metadata = {
    title: "Create New Blog Post"
};

const Editor = dynamic(() => import("./_components/Editor"), { ssr: false });

export default function CreateBlogPost() {
    return (
        <main className="space-y-8">
            <h1 className="text-3xl font-bold">New Blog Post</h1>
            <Editor />
        </main>
    );
}
