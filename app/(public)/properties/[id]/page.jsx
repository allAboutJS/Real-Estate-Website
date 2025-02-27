import getProperty from "@/app/_actions/getProperty";
import Property from "./_component/Property";
import OtherProperties from "./_component/OtherProperties";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const { data } = await getProperty(id);

    return {
        title: `${data?.name} - Ebubeagu Properties`,
        description: data?.description,
        openGraph: {
            title: data?.name,
            description: data?.description,
            images: [data?.featured_image_url]
        },
        twitter: {
            title: data?.name,
            description: data?.description,
            images: [data?.featured_image_url]
        }
    };
};

export default async function SingleProperty({ params }) {
    const { id } = await params;
    const { data, success } = await getProperty(id);
    return (
        <main className="flex flex-col lg:flex-row justify-center max-w-screen-lg mx-auto">
            <Property data={data} success={success} />
            <OtherProperties id={id} />
        </main>
    );
}
