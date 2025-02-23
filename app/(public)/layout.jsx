import Footer from "./_components/Footer";
import Header from "./_components/Header";

export const metadata = {
    title: "Ebube Agu Real Estate Company",
    description:
        "Ebube Agu Properties Ltd. is a real estate company with years of experience in the industry, we have built a reputation for excellence, transparency, and dedication to helping our clients navigate the real estate market with confidence.",
    openGraph: {
        title: "Ebube Agu Real Estate Company",
        description:
            "Ebube Agu Properties Ltd. is a real estate company with years of experience in the industry, we have built a reputation for excellence, transparency, and dedication to helping our clients navigate the real estate market with confidence."
    },
    twitter: {
        title: "Ebube Agu Real Estate Company",
        description:
            "Ebube Agu Properties Ltd. is a real estate company with years of experience in the industry, we have built a reputation for excellence, transparency, and dedication to helping our clients navigate the real estate market with confidence."
    }
};

export default function PublicLayout({ children }) {
    return (
        <>
            <Header />
            <div className="bg-slate-50">{children}</div>
            <Footer />
        </>
    );
}
