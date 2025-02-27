import getBlogPost from "@/app/_actions/getBlogPost";
import BlogBody from "./_components/BlogBody";
import OtherBlogPosts from "./_components/OtherBlogPosts";

export const generateMetadata = async ({ params }) => {
    const { slug } = await params;
    const { data } = await getBlogPost(slug);

    return {
        title: `${data?.title} - Ebubeagu Properties`,
        description: data?.summary,
        openGraph: {
            title: data?.title,
            description: data?.summary,
            images: [data?.featured_image_url]
        },
        twitter: {
            title: data?.title,
            description: data?.summary,
            images: [data?.featured_image_url]
        }
    };
};

export default async function SingleBlogPage({ params }) {
    const { slug } = params;
    const { success, data } = await getBlogPost(slug);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-y-6 max-w-screen-2xl mx-auto">
            <BlogBody success={success} data={data} />
            <OtherBlogPosts slug={slug} />
        </div>
    );
}
