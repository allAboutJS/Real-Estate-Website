import Image from "next/image";

export default function Header() {
    return (
        <header className="p-6 sticky top-0 w-full left-0 bg-white shadow-sm h-20 flex items-center z-20">
            <div>
                <Image height={60} width={60} src="/images/logo.jpg" />
            </div>
        </header>
    );
}
