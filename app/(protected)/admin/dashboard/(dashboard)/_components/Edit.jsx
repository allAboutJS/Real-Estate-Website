"use client";

import { BiEdit } from "react-icons/bi";
import Modal from "../../_components/Modal";
import { useState } from "react";
import PropertyCreationForm from "./PropertyCreationForm";

export default function Edit(props) {
    const [showProperty, setShowProperty] = useState(false);
    return (
        <>
            <button
                onClick={() => setShowProperty(true)}
                className="hover:bg-zinc-200 bg-zinc-100 flex justify-center items-center gap-1 p-2 rounded-lg"
            >
                Edit <BiEdit />
            </button>
            {showProperty && (
                <Modal onDismiss={() => setShowProperty(false)} dismissOnOutsideClick={false} heading="Edit Property">
                    <PropertyCreationForm defaultValues={props} isEditting />
                </Modal>
            )}
        </>
    );
}
