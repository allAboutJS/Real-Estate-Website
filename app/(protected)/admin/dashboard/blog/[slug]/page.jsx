import getBlogPost from "@/app/_actions/getBlogPost";
import ActionButtons from "./_components/ActionButtons";

export const generateMetadata = async ({ params }) => {
    const { slug } = await params;
    const { success, data } = await getBlogPost(slug);

    return {
        title: success ? `Viewing: ${data.title}` : `404 - Blog Post Not Found`
    };
};

export default async function SingleBlogPost({ params }) {
    const { slug } = await params;
    const { success, data } = await getBlogPost(slug);

    return (
        <div>
            {success ? (
                <div>
                    <div className="text-sm">
                        <ActionButtons slug={slug} isDraft={data.is_draft} archived={data.archived} />
                    </div>
                    <article className="bg-white shadow p-4 space-y-3 max-w-screen-md m-auto blog-container">
                        <h1 className="text-3xl font-bold capitalize">{data.title}</h1>
                        <div
                            className="space-y-2 [&_*]:break-words"
                            dangerouslySetInnerHTML={{ __html: data.body }}
                        ></div>
                    </article>
                </div>
            ) : (
                <div>No Post Found</div>
            )}
        </div>
    );
}
