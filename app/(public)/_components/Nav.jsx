"use client";

import Link from "next/link";
import { CgMail, CgMenu } from "react-icons/cg";
import navMenu from "../_lib/navMenu";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const nav = useRef(null);
    const menuTrigger = useRef(null);
    const closeMenuOnOutsideClick = (e) => {
        if (
            !e.target.isSameNode(nav.current) &&
            !nav.current.contains(e.target) &&
            !e.target.isSameNode(menuTrigger.current) &&
            !menuTrigger.current.contains(e.target)
        )
            setTimeout(() => setIsMenuOpen(false), 300);
    };

    useEffect(() => {
        isMenuOpen ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
    }, [isMenuOpen]);

    useEffect(() => {
        document.addEventListener("click", closeMenuOnOutsideClick);
        return () => document.removeEventListener("click", closeMenuOnOutsideClick);
    }, []);

    return (
        <>
            <nav
                ref={nav}
                aria-roledescription="Primary navigation"
                data-open={isMenuOpen}
                role="navigation"
                className="max-md:absolute max-md:top-4 max-md:right-4 max-md:bg-white max-md:shadow-lg max-md:scale-0 max-md:w-56 max-md:rounded-lg overflow-hidden"
            >
                <ul className="flex md:gap-3 text-sm max-md:flex-col min-w-40">
                    {navMenu.map((item) => (
                        <li onClick={() => setIsMenuOpen(false)} key={item.label}>
                            <Link
                                href={item.path}
                                className="w-full max-md:hover:bg-blue-100 md:hover:underline max-md:p-2 block"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="flex items-center gap-6">
                <ul className="flex gap-3 text-sm items-center">
                    <li>
                        <a
                            className="flex items-center gap-1 py-2 px-4 bg-green-600 text-white rounded-md"
                            href="https://wa.me/2349072731774"
                        >
                            <FaWhatsapp />
                            <span className="max-sm:hidden">WhatsApp</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center gap-1 py-2 px-4 bg-gradient-to-br from-blue-600 via-yellow-600 to-red-600 text-white rounded-md"
                            href="mailto:ebubeaguproperties@gmail.com"
                        >
                            <CgMail />
                            <span className="max-sm:hidden">Email</span>
                        </a>
                    </li>
                </ul>
                <button ref={menuTrigger} onClick={() => setIsMenuOpen(true)} className="md:hidden" title="Menu">
                    <CgMenu />
                </button>
            </div>
        </>
    );
}
