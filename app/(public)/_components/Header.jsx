import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
    return (
        <header className="bg-blue-100 shadow-sm sticky top-0 w-full left-0 right-0 z-20">
            <div className="flex justify-between max-w-screen-lg m-auto p-4 h-20 items-center">
                <div>
                    <Link href="/">Logo</Link>
                </div>
                <Nav />
            </div>
        </header>
    );
}
