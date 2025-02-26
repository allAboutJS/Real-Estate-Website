"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiPaperPlane, BiBuildingHouse, BiMessage, BiCog, BiLogOut } from "react-icons/bi";

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav
            className="w-60 shadow-lg bg-white flex justify-between flex-col py-6 top-20 left-0 bottom-0 fixed overflow-y-auto"
            role="navigation"
        >
            <ul>
                <li>
                    <Link
                        className={`${
                            pathname === "/admin/dashboard" ? "bg-blue-600 text-white" : "hover:bg-blue-200"
                        } p-2 flex gap-1 items-center text-sm font-semibold`}
                        href="/admin/dashboard/"
                    >
                        <BiBuildingHouse /> Properties
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${
                            pathname.startsWith("/admin/dashboard/blog")
                                ? "bg-blue-600 text-white"
                                : "hover:bg-blue-200"
                        } p-2 flex gap-1 items-center text-sm font-semibold`}
                        href="/admin/dashboard/blog"
                    >
                        <BiPaperPlane /> Blog Posts
                    </Link>
                </li>
                <li>
                    <Link
                        className={`${
                            pathname.startsWith("/admin/dashboard/messages")
                                ? "bg-blue-600 text-white"
                                : "hover:bg-blue-200"
                        } p-2 flex gap-1 items-center text-sm font-semibold`}
                        href="/admin/dashboard/messages"
                    >
                        <BiMessage /> Messages
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link
                        className={`${
                            pathname === "/admin/dashboard/settings" ? "bg-blue-600 text-white" : "hover:bg-blue-200"
                        } p-2 flex gap-1 items-center text-sm font-semibold`}
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
