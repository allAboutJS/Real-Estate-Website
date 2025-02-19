import Modal from "../_components/Modal";
import Tabs from "../_components/Tabs";
import getMessages from "./_actions/getMessages";
import MessageTable from "./_components/MessageTable";
import sortMessages from "./_utils/sortMessages";

export default async function Messages() {
    const { success, data } = await getMessages();
    const { all, read, unread } = sortMessages(data);

    return (
        <div className="space-y-8">
            <section className="flex justify-between">
                <h1 className="text-3xl font-bold">Messages</h1>
            </section>
            <div className="space-y-4">
                <div className="bg-yellow-300 text-yellow-700 p-4 text-sm text-center font-semibold">
                    Please note that some numbers may not be registered on WhatsApp, and some people may provide fake
                    emails.
                </div>
                <Tabs
                    data={[
                        { label: "Unread", component: <MessageTable data={unread} /> },
                        { label: "Read", component: <MessageTable data={read} /> },
                        { label: "All", component: <MessageTable data={all} /> }
                    ]}
                />
            </div>
            {/* <Modal>Hello World</Modal> */}
        </div>
    );
}
