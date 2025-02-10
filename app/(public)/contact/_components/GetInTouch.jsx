import { CgMail, CgPhone, CgPin, CgStopwatch } from "react-icons/cg";

export default function GetInTouch() {
    return (
        <section class="max-w-screen-lg mx-auto">
            <h2 className="text-3xl mb-4">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-1">
                        <CgPin /> Visit Us
                    </h3>
                    <p>
                        123 Real Estate Avenue, Suite 456
                        <br />
                        City, State, ZIP
                    </p>

                    <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center gap-1">
                        <CgStopwatch /> Office Hours
                    </h3>
                    <ul>
                        <li>Monday to Friday: 9:00 AM – 6:00 PM</li>
                        <li>Saturday: 10:00 AM – 4:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-1">
                        <CgPhone /> Call Us
                    </h3>
                    <p>Office Phone: (123) 456-7890</p>
                    <p>Mobile/WhatsApp: (987) 654-3210</p>

                    <h3 className="text-xl font-semibold mt-6 mb-2 flex items-center gap-1">
                        <CgMail /> Email Us
                    </h3>
                    <p>General Inquiries: info@realestate.com</p>
                    <p>Sales Support: sales@realestate.com</p>
                </div>
            </div>
        </section>
    );
}
