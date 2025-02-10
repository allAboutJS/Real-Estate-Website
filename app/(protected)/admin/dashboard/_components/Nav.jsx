import Link from "next/link";
import { BiSolidDashboard, BiPaperPlane, BiBuildingHouse, BiMessage, BiCog, BiLogOut } from "react-icons/bi";

export default function Nav() {
    return (
        <nav
            className="w-60 shadow-lg flex justify-between flex-col py-6 sticky top-12 left-0 h-[calc(100vh-48px)] overflow-y-auto"
            role="navigation"
        >
            <ul>
                <li>
                    <Link
                        className="p-2 flex gap-1 items-center hover:bg-zinc-200 text-sm font-semibold"
                        href="/admin/dashboard"
                    >
                        <BiSolidDashboard /> Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        className="p-2 flex gap-1 items-center hover:bg-zinc-200 text-sm font-semibold"
                        href="/admin/dashboard/blog"
                    >
                        <BiPaperPlane /> Blog Posts
                    </Link>
                </li>
                <li>
                    <Link
                        className="p-2 flex gap-1 items-center hover:bg-zinc-200 text-sm font-semibold"
                        href="/admin/dashboard/properties"
                    >
                        <BiBuildingHouse /> Properties
                    </Link>
                </li>
                <li>
                    <Link
                        className="p-2 flex gap-1 items-center hover:bg-zinc-200 text-sm font-semibold"
                        href="/admin/dashboard/messages"
                    >
                        <BiMessage /> Messages
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link
                        className="p-2 flex gap-1 items-center hover:bg-zinc-200 text-sm font-semibold"
                        href="/admin/settings"
                    >
                        <BiCog /> Settings
                    </Link>
                </li>
                <li>
                    <Link
                        className="p-2 flex gap-1 items-center hover:bg-red-200 text-sm font-semibold"
                        href="/admin/logout"
                    >
                        <BiLogOut /> Logout
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
