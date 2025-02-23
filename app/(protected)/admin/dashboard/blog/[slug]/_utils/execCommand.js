import archiveBlogPost from "../../_actions/archiveBlogPost";
import deletePost from "../../_actions/deletePost";
import publishArchivedBlogPost from "../../_actions/publishArchivedBlogPost";
import ToastOptions from "../_components/ToastOptions";
import { toast } from "sonner";

const execCommand = async (command, slug, router) => {
    let toastId;

    if (command === "delete") {
        const _delete = async () =>
            toast.promise(
                () =>
                    new Promise(async (resolve, reject) => {
                        try {
                            toast.dismiss(toastId);
                            const { success } = await deletePost(slug);

                            if (success === true) {
                                resolve();
                                router.push("/admin/dashboard/blog");
                                router.refresh();
                            } else reject();
                        } catch {
                            reject();
                        }
                    }),
                {
                    loading: "Deleting post...",
                    success: "Post deleted successfully!",
                    error: "Request failed!"
                }
            );

        toastId = toast.warning("Are you sure you want to delete this post", {
            action: <ToastOptions toastId={toastId} onAccept={_delete} />
        });
    } else if (command === "archive") {
        const _archive = async () =>
            toast.promise(
                () =>
                    new Promise(async (resolve, reject) => {
                        try {
                            toast.dismiss(toastId);
                            const { success } = await archiveBlogPost(slug);

                            if (success === true) {
                                resolve();
                                router.push("/admin/dashboard/blog");
                                router.refresh();
                            } else reject();
                        } catch {
                            reject();
                        }
                    }),
                {
                    loading: "Moving post to archive...",
                    success: "Post moved to archive successfully!",
                    request: "Request failed!"
                }
            );

        toastId = toast.warning("Are you sure you want to archive this post", {
            action: <ToastOptions toastId={toastId} onAccept={_archive} />
        });
    } else if (command === "publish") {
        const _publish = async () =>
            toast.promise(
                () =>
                    new Promise(async (resolve, reject) => {
                        try {
                            toast.dismiss(toastId);
                            const { success } = await publishArchivedBlogPost(slug);

                            if (success === true) {
                                resolve();
                                router.push("/admin/dashboard/blog");
                                router.refresh();
                            } else reject();
                        } catch {
                            reject();
                        }
                    }),
                {
                    loading: "Publishing post...",
                    success: "Post published successfully!",
                    request: "Request failed!"
                }
            );

        toastId = toast.warning("Are you sure you want to publish this post", {
            action: <ToastOptions toastId={toastId} onAccept={_publish} />
        });
    }
};

export default execCommand;
