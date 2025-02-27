import PropertyCard from "@/app/(public)/_components/PropertyCard";
import getPropertiesMetadata from "@/app/_actions/getPropertiesMetadata";
import { unstable_noStore } from "next/cache";

export default async function OtherProperties({ id }) {
    unstable_noStore();
    const { success, data } = await getPropertiesMetadata(4, true);

    return (
        <div className="space-y-4 p-4">
            <h3 className="text-2xl">Other Properties You May Be Interested In</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-6">
                {success &&
                    data.filter((post) => post.id != id).map((post) => <PropertyCard key={post.id} {...post} />)}
            </div>
        </div>
    );
}
