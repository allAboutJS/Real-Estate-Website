import { toast } from "sonner";
import ToastOptions from "../../blog/[slug]/_components/ToastOptions";

const handleMessageDeletion = async (messageId, router, deleteMessage) => {
    let toastId;
    toastId = toast.warning("Are you sure you want to delete this message?", {
        action: (
            <ToastOptions
                toastId={toastId}
                onAccept={() =>
                    toast.promise(
                        () =>
                            new Promise(async (resolve, reject) => {
                                try {
                                    toast.dismiss(toastId);
                                    const { success } = await deleteMessage(messageId);
                                    success ? (router.refresh(), resolve()) : reject();
                                } catch {
                                    reject();
                                }
                            }),
                        {
                            loading: "Deleting message...",
                            success: "Message deleted successfully",
                            error: "Failed to delete message"
                        }
                    )
                }
            />
        )
    });
};

export default handleMessageDeletion;
