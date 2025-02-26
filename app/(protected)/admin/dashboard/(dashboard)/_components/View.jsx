"use client";

import { useState } from "react";
import { CgEditBlackPoint, CgEye } from "react-icons/cg";
import Modal from "../../_components/Modal";
import Image from "next/image";
import { FaLocationPin, FaNairaSign, FaQuestion, FaWhatsapp } from "react-icons/fa6";
import ImageCarousel from "@/app/_components/ImageCarousel";

export default function View(props) {
    const [showProperty, setShowProperty] = useState(false);
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
                                    {props.price.toLocaleString()}
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
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
}
