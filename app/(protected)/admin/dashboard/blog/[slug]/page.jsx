import getBlogPost from "@/app/_actions/getBlogPost";
import ActionButtons from "./_components/ActionButtons";

export const generateMetadata = async ({ params, searchParams }) => {
    const { slug } = await params;
    const { table } = await searchParams;
    const { success, data } = await getBlogPost(slug, table);

    return {
        title: success ? `Viewing: ${data.title}` : `404 - Blog Post Not Found`
    };
};

export default async function SingleBlogPost({ params, searchParams }) {
    const { slug } = await params;
    const { table } = await searchParams;
    const { success, data } = await getBlogPost(slug, table);

    return (
        <div>
            {success ? (
                <div>
                    <div className="text-sm">
                        <ActionButtons table={table} slug={slug} />
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
