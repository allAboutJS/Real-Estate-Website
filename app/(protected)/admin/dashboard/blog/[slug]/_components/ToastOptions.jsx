import { toast } from "sonner";

export default function ToastOptions({ toastId, onAccept }) {
    return (
        <div className="text-xs flex gap-1">
            <button
                className="px-2 py-1 bg-zinc-300 text-black whitespace-nowrap rounded-md"
                onClick={() => toast.dismiss(toastId)}
            >
                NO
            </button>
            <button className="px-2 py-1 bg-black text-white whitespace-nowrap rounded-md" onClick={onAccept}>
                YES
            </button>
        </div>
    );
}
