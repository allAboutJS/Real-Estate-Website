"use client";

import { CgClose } from "react-icons/cg";

export default function Modal({ children, onDismiss, heading }) {
    return (
        <>
            <div onClick={onDismiss} className="inset-0 top-0 fixed bg-black bg-opacity-10 backdrop-blur-sm z-50"></div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg z-50 w-[90%] max-w-screen-sm h-fit max-h-[90%] overflow-y-auto">
                <div className="relative">
                    <button
                        title="Close this modal"
                        className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center absolute top-1 right-1 active:scale-90 transition-transform z-10"
                        onClick={onDismiss}
                    >
                        <CgClose />
                    </button>
                    {heading && (
                        <div className="text-xl bg-white font-semibold capitalize sticky top-0 w-full left-0 border-b p-4 text-center">
                            {heading}
                        </div>
                    )}
                    <div className="p-4">{children}</div>
                </div>
            </div>
        </>
    );
}
