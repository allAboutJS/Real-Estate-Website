"use client";

import Link from "next/link";
import { CgPhone, CgMail, CgMenu } from "react-icons/cg";
import navMenu from "../_lib/navMenu";
import { useEffect, useRef, useState } from "react";

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
                className="max-md:absolute max-md:top-4 max-md:right-4 max-md:bg-white max-md:shadow-lg max-md:scale-0"
            >
                <ul className="flex md:gap-3 text-sm max-sm:flex-col min-w-40">
                    {navMenu.map((item) => (
                        <li onClick={() => setIsMenuOpen(false)} key={item.label}>
                            <Link
                                href={item.path}
                                className="w-full max-md:hover:bg-zinc-100 md:hover:underline max-md:p-2 block"
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
                            className="flex items-center gap-1 py-1 px-2 bg-blue-200 rounded-full"
                            href="tel:+2349072731774"
                        >
                            <CgPhone />
                            <span className="max-sm:hidden">+234 9072731774</span>
                        </a>
                    </li>
                    <li>
                        <a
                            className="flex items-center gap-1 py-1 px-2 bg-blue-200 rounded-full"
                            href="mailto:ebubeaguproperties@gmail.com"
                        >
                            <CgMail />
                            <span className="max-sm:hidden">ebubeaguproperties@gmail.com</span>
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
