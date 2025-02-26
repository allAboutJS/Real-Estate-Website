import { unstable_noStore } from "next/cache";
import Tabs from "../_components/Tabs";
import getMessages from "./_actions/getMessages";
import MessageTable from "./_components/MessageTable";
import sortMessages from "./_utils/sortMessages";

export default async function Messages() {
    unstable_noStore();
    const { success, data } = await getMessages();
    const { all, read, unread } = sortMessages(success ? data : null);

    return (
        <div className="space-y-8">
            <section className="flex justify-between">
                <h1 className="text-3xl font-bold">Messages</h1>
            </section>
            <div className="space-y-4">
                {data?.length ? (
                    <div className="bg-yellow-300 text-yellow-700 p-4 text-sm text-center font-semibold">
                        Please note that some numbers may not be registered on WhatsApp, and some people may provide
                        fake emails.
                    </div>
                ) : null}
                <Tabs
                    data={[
                        { label: "Unread", component: unread?.length ? <MessageTable data={unread} /> : null },
                        { label: "Read", component: read?.length ? <MessageTable data={read} /> : null },
                        { label: "All", component: all?.length ? <MessageTable data={all} /> : null }
                    ]}
                />
            </div>
        </div>
    );
}
