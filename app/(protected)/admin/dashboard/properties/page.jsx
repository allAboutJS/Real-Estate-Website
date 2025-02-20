import Tabs from "../_components/Tabs";
import Create from "./_components/Create";

export const metadata = {
    title: "Admin Dashboard - Properties"
};

export default function Properties() {
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
                        component: (
                            <div className="text-center text-zinc-400 min-h-20 flex justify-center items-center">
                                There&apos;s nothing here.
                            </div>
                        )
                    },
                    {
                        label: "Archived",
                        component: (
                            <div className="text-center text-zinc-400 min-h-20 flex justify-center items-center">
                                There&apos;s nothing here.
                            </div>
                        )
                    }
                ]}
            />
        </div>
    );
}
