import Link from "next/link";
import navMenu from "../_lib/navMenu";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 p-6 text-sm text-center space-y-3">
            <nav aria-roledescription="Primary navigation" role="navigation">
                <ul className="flex gap-3 text-sm justify-center flex-wrap">
                    {navMenu.map((item) => (
                        <li key={item.label}>
                            <Link href={item.path} className="w-full hover:underline">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <p>
                &copy; <b>Ebube Agu Properties Ltd.</b> {new Date().getFullYear()}
            </p>
        </footer>
    );
}
