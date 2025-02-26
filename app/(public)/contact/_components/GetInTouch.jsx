import { CgMail, CgPhone, CgPin, CgStopwatch } from "react-icons/cg";

export default function GetInTouch() {
    return (
        <section class="max-w-screen-lg mx-auto">
            <h2 className="text-3xl mb-4 text-blue-800">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-1">
                        <CgPin /> Visit Us
                    </h3>
                    <p>
                        111 Chime Avenue,
                        <br />
                        New Haven, Enugu.
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center gap-1">
                        <CgStopwatch /> Office Hours
                    </h3>
                    <ul>
                        <li>Monday to Saturdy: 9 AM - 5 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-1">
                        <CgPhone /> Call Us
                    </h3>
                    <p>
                        Office Phone: <a href="tel:+2349072731774">09072731774</a>
                    </p>
                    <p>
                        Mobile/WhatsApp:{" "}
                        <a href="https://wa.me/2348160624320" target="_blank" rel="noopener noreferrer">
                            08160624320
                        </a>
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center gap-1">
                        <CgMail /> Email Us
                    </h3>
                    <p>
                        General Inquiries: <a href="mailto:madukaife123@gm.com ">madukaife123@gm.com </a>
                    </p>
                    <p>
                        Office email: <a href="mailto:ebubeaguproperties@gmail.com"> ebubeaguproperties@gmail.com</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
