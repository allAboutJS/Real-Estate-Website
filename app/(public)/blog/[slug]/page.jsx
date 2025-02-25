import getBlogPost from "@/app/_actions/getBlogPost";
import BlogBody from "./_components/BlogBody";

export const generateMetadata = async ({ params }) => {
    const { slug } = params;
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

    return <BlogBody success={success} data={data} />;
}
