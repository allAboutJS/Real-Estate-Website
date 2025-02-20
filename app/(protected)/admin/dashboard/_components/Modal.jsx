"use client";

import { CgClose } from "react-icons/cg";

export default function Modal({ children, onDismiss, heading, dismissOnOutsideClick = true }) {
    return (
        <>
            <div
                onClick={dismissOnOutsideClick ? onDismiss : undefined}
                className="inset-0 top-0 fixed bg-black bg-opacity-10 backdrop-blur-sm z-50"
            ></div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg z-50 w-[90%] max-w-screen-sm h-fit max-h-[90%] overflow-y-auto">
                <div className="relative">
                    <div className="flex bg-white justify-end items-center border-b p-4 sticky top-0 w-full left-0">
                        {heading && (
                            <div className="text-xl font-semibold capitalize text-center flex-1">{heading}</div>
                        )}
                        <button
                            title="Close this modal"
                            className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center active:scale-90 transition-transform z-10"
                            onClick={onDismiss}
                        >
                            <CgClose />
                        </button>
                    </div>
                    <div className="p-4">{children}</div>
                </div>
            </div>
        </>
    );
}
