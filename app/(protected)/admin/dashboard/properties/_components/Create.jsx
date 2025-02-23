"use client";

import { CgMathPlus } from "react-icons/cg";
import Modal from "../../_components/Modal";
import { useState } from "react";
import PropertyCreationForm from "./PropertyCreationForm";

export default function Create() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white py-2 px-4 justify-center flex items-center gap-2 rounded-lg"
            >
                <CgMathPlus /> CREATE
            </button>
            {isModalOpen ? (
                <Modal
                    onDismiss={() => setIsModalOpen(false)}
                    dismissOnOutsideClick={false}
                    heading="Create New Property"
                >
                    <PropertyCreationForm />
                </Modal>
            ) : null}
        </>
    );
}
