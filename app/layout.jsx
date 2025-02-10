// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import NextTopLoader from "nextjs-toploader";
import "./global.css";
import SonnerNotification from "./_components/SonnerNotification";
import initTables from "./_actions/initTables";

export default async function RootLayout({ children }) {
    await initTables();

    return (
        <html lang="en">
            <body>
                <NextTopLoader color="#333" showSpinner={false} />
                {children}
                {/* <Analytics /> */}
                {/* <SpeedInsights /> */}
                <SonnerNotification />
            </body>
        </html>
    );
}
