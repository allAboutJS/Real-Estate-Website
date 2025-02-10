import Header from "./_components/Header";
import Nav from "./_components/Nav";
import "react-quill/dist/quill.snow.css";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Header />
            <div className="flex min-h-screen">
                <Nav />
                <main className="flex-1 bg-zinc-100 p-4">{children}</main>
            </div>
        </>
    );
}
