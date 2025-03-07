import Image from "next/image";

export default function Header() {
    return (
        <header className="p-6 sticky top-0 w-full left-0 bg-white shadow-sm h-20 flex items-center z-20">
            <div>
                <Image height={80} width={80} src="/images/logo.png" />
            </div>
        </header>
    );
}
