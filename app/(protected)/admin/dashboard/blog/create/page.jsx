import Editor from "./_components/Editor";

export const metadata = {
    title: "Create New Blog Post"
};

export default function CreateBlogPost() {
    return (
        <main className="space-y-8">
            <h1 className="text-3xl font-bold">New Blog Post</h1>
            <Editor />
        </main>
    );
}
