import Header from "./_components/Header";
import Nav from "./_components/Nav";
import "react-quill/dist/quill.snow.css";

export default function DashboardLayout({ children }) {
    return (
        <>
            <Header />
            <div className="bg-zinc-100 min-h-screen">
                <Nav />
                <main className="p-4 ml-60">{children}</main>
            </div>
        </>
    );
}
