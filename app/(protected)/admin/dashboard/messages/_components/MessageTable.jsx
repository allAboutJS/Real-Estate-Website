"use client";

import { useState } from "react";
import Modal from "../../_components/Modal";
import { FaPhone, FaWhatsapp } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import markMessageAsRead from "../_actions/markMessageAsRead";
import handleMessageDeletion from "../_utils/handleMessageDeletion";
import deleteMessage from "../_actions/delateMessage";

export default function MessageTable({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentlyViewedMessage, setCurrentlyViewedMessage] = useState(null);
    const router = useRouter();

    return (
        <div className="overflow-auto max-w-full show-scrollbar">
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-4">Fullname</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Phone</th>
                        <th className="p-4">Message</th>
                        <th className="p-4">Created At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((message) => (
                        <tr className="whitespace-nowrap [&:last-child_td]:border-none" key={message.id}>
                            <td className="border-b py-4 px-1">{message.fullname}</td>
                            <td className="border-b py-4 px-1">
                                <a href={`mailto:${message.email}`} className="underline" target="_blank">
                                    {message.email}
                                </a>
                            </td>
                            <td className="border-b py-4 px-1">
                                <a href={`tel:+${message.phone_number}`} className="underline" target="_blank">
                                    {message.phone_number}
                                </a>
                            </td>
                            <td className="border-b py-4 px-1">
                                <div className="max-w-xs text-ellipsis overflow-hidden">{message.message}</div>
                            </td>
                            <td className="border-b py-4 px-1">{new Date(message.created_at).toDateString()}</td>
                            <td className="border-b py-4 px-1">
                                <div className="flex gap-1 font-semibold">
                                    <button
                                        onClick={() => (setCurrentlyViewedMessage(message), setIsModalOpen(true))}
                                        className="px-2 py-1 bg-black text-white"
                                    >
                                        View
                                    </button>
                                    <button
                                        onClick={() => handleMessageDeletion(message.id, router, deleteMessage)}
                                        className="px-2 py-1 bg-red-600 text-white"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
                <Modal
                    onDismiss={async () => (
                        setIsModalOpen(false),
                        currentlyViewedMessage.seen || (await markMessageAsRead(currentlyViewedMessage.id)),
                        currentlyViewedMessage.seen || router.refresh()
                    )}
                    heading="View Message"
                >
                    {currentlyViewedMessage && (
                        <div>
                            <div className="space-y-3">
                                <div className="bg-yellow-300 text-yellow-700 p-4 text-sm text-center font-semibold">
                                    Please note that some numbers may not be registered on WhatsApp, and some people may
                                    provide fake emails.
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">Fullname</div>
                                    <div>{currentlyViewedMessage.fullname}</div>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">Email</div>
                                    <div>{currentlyViewedMessage.email}</div>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">Phone</div>
                                    <div>{currentlyViewedMessage.phone_number}</div>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">Message</div>
                                    <div>{currentlyViewedMessage.message}</div>
                                </div>
                                <div>
                                    <div className="text-lg font-semibold">Sent At</div>
                                    <div>{new Date(currentlyViewedMessage.created_at).toDateString()}</div>
                                </div>
                                <div>
                                    <a
                                        target="_blank"
                                        href={`https://wa.me/${currentlyViewedMessage.phone_number.replace(
                                            /^[0+]/,
                                            ""
                                        )}`}
                                        className="bg-green-600 text-white p-2 flex items-center gap-2 justify-center"
                                    >
                                        <FaWhatsapp /> Chat on WhatsApp
                                    </a>
                                    <a
                                        target="_blank"
                                        href={`tel:${currentlyViewedMessage.phone_number}`}
                                        className="bg-blue-600 text-white p-2 flex items-center gap-2 justify-center"
                                    >
                                        <FaPhone /> Dial the number
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            )}
        </div>
    );
}
