"use client";

import { useState } from "react";
import { CgEditBlackPoint, CgEye } from "react-icons/cg";
import Modal from "../../_components/Modal";
import { FaLocationPin, FaNairaSign, FaQuestion, FaWhatsapp } from "react-icons/fa6";
import ImageCarousel from "@/app/_components/ImageCarousel";
import { toast } from "sonner";
import ToastOptions from "../../blog/[slug]/_components/ToastOptions";
import togglePropertyArchivedState from "../_actions/togglePropertyArchivedState";
import { useRouter } from "next/navigation";
import deleteProperty from "../_actions/deleteProperty";

export default function View(props) {
    const [showProperty, setShowProperty] = useState(false);
    const router = useRouter();
    const handleAction = (action) => {
        let toastId;

        if (action === "archive") {
            toastId = toast.warning("Are you sure you want to archive this property?", {
                action: (
                    <ToastOptions
                        toastId={toastId}
                        onAccept={() =>
                            toast.promise(
                                () =>
                                    new Promise(async (resolve, reject) => {
                                        try {
                                            toast.dismiss(toastId);

                                            const { success } = await togglePropertyArchivedState(props.id);

                                            if (!success) reject();
                                            else {
                                                resolve();
                                                router.refresh();
                                            }
                                        } catch (error) {
                                            console.log(error);
                                            reject();
                                        }
                                    }),
                                {
                                    loading: "Archiving property...",
                                    success: "Property archived successfully!",
                                    error: "Failed to archive property!"
                                }
                            )
                        }
                    />
                )
            });
        } else if (action === "unarchive") {
            toastId = toast.warning("Are you sure you want to remove this property from the archive?", {
                action: (
                    <ToastOptions
                        toastId={toastId}
                        onAccept={() =>
                            toast.promise(
                                () =>
                                    new Promise(async (resolve, reject) => {
                                        try {
                                            toast.dismiss(toastId);

                                            const { success } = await togglePropertyArchivedState(props.id, false);

                                            if (!success) reject();
                                            else {
                                                resolve();
                                                router.refresh();
                                            }
                                        } catch (error) {
                                            console.log(error);
                                            reject();
                                        }
                                    }),
                                {
                                    loading: "Removing property from archive...",
                                    success: "Property removed from archive successfully!",
                                    error: "Failed to remove from archive!"
                                }
                            )
                        }
                    />
                )
            });
        } else if (action === "delete") {
            toastId = toast.warning("Are you sure you want to delete this property?", {
                action: (
                    <ToastOptions
                        toastId={toastId}
                        onAccept={() =>
                            toast.promise(
                                () =>
                                    new Promise(async (resolve, reject) => {
                                        try {
                                            toast.dismiss(toastId);

                                            const { success } = await deleteProperty(props.id);

                                            if (!success) reject();
                                            else {
                                                resolve();
                                                router.refresh();
                                            }
                                        } catch (error) {
                                            console.log(error);
                                            reject();
                                        }
                                    }),
                                {
                                    loading: "Deleting property...",
                                    success: "Property deleted successfully!",
                                    error: "Failed to delete property!"
                                }
                            )
                        }
                    />
                )
            });
        }
    };

    return (
        <>
            <button
                onClick={() => setShowProperty(true)}
                className="hover:bg-zinc-200 bg-zinc-100 flex justify-center items-center gap-1 p-2 rounded-lg"
            >
                View <CgEye />
            </button>
            {showProperty && (
                <Modal heading="Property View" onDismiss={() => setShowProperty(false)}>
                    <div className="space-y-4">
                        <ImageCarousel assets={props.assets} />
                        <div className="text-zinc-800 space-y-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-end">
                                <p className="capitalize">
                                    <FaLocationPin className="text-blue-600 inline" /> <b>Address:</b> {props.address}
                                </p>
                                <p>
                                    <FaNairaSign className="text-green-600 inline" /> <b>Price:</b>{" "}
                                    {Number(props.price).toLocaleString()}
                                </p>
                                <p className="capitalize">
                                    <FaQuestion className="text-yellow-600 inline" /> <b>For:</b>{" "}
                                    {props.availability_status}
                                </p>
                                <p className="capitalize">
                                    <CgEditBlackPoint className="text-red-600 inline" /> <b>Type:</b>{" "}
                                    {props.property_type}
                                </p>
                            </div>
                            <div>
                                <p className="whitespace-pre-wrap">
                                    <b>Description:</b> <br /> {props.description}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                {props.archived ? (
                                    <button
                                        onClick={() => handleAction("unarchive")}
                                        className="px-4 p-2 rounded-lg flex-1 text-center bg-green-600 text-white"
                                    >
                                        UNARCHIVE
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleAction("archive")}
                                        className="px-4 p-2 rounded-lg flex-1 text-center bg-yellow-600 text-white"
                                    >
                                        ARCHIVE
                                    </button>
                                )}
                                <button
                                    onClick={() => handleAction("delete")}
                                    className="px-4 p-2 rounded-lg flex-1 text-center bg-red-600 text-white"
                                >
                                    DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}
