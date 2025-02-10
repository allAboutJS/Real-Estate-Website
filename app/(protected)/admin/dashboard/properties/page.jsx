import Link from "next/link";
import { CgMathPlus } from "react-icons/cg";
import Tabs from "../_components/Tabs";

export const metadata = {
    title: "Admin Dashboard - Properties"
};

export default function Properties() {
    return (
        <div className="space-y-8">
            <section className="flex justify-between">
                <h1 className="text-3xl font-bold">Properties</h1>
                <Link
                    prefetch
                    className="bg-black text-white py-2 px-4 justify-center flex items-center gap-2"
                    href="./blog/create"
                >
                    <CgMathPlus /> CREATE
                </Link>
            </section>
            <Tabs
                data={[
                    {
                        label: "Landed Properties",
                        component: (
                            <div className="text-center text-zinc-400 min-h-20 flex justify-center items-center">
                                There's nothing here.
                            </div>
                        )
                    },
                    {
                        label: "Buildings",
                        component: (
                            <div className="text-center text-zinc-400 min-h-20 flex justify-center items-center">
                                There's nothing here.
                            </div>
                        )
                    }
                ]}
            />
        </div>
    );
}
