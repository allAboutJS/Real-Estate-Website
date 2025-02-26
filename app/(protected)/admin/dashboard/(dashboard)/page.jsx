import Tabs from "../_components/Tabs";
import Create from "./_components/Create";
import { unstable_noStore } from "next/cache";
import PublishedProperties from "./_components/PublishedProperties";
import ArchivedProperties from "./_components/ArchivedProperties";
import getPropertiesMetadata from "../_actions/getPropertiesMetadata";

export const metadata = {
    title: "Admin Dashboard - Properties"
};

export default async function Properties() {
    unstable_noStore();
    const { success, data } = await getPropertiesMetadata();

    return (
        <div className="space-y-8">
            <section className="flex justify-between">
                <h1 className="text-3xl font-bold">Properties</h1>
                <Create />
            </section>
            <Tabs
                data={[
                    {
                        label: "Published",
                        component: <PublishedProperties properties={data} success={success} />
                    },
                    {
                        label: "Archived",
                        component: <ArchivedProperties properties={data} success={success} />
                    }
                ]}
            />
        </div>
    );
}
