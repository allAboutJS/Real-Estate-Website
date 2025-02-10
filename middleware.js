import { cookies } from "next/headers";
import { NextResponse } from "next/server";
// import getDbClient from "./app/_config/dbConfig";

export async function middleware(req) {
    try {
        const cookieStore = cookies();
        const authToken = cookieStore.get("auth_token")?.value;

        if (!authToken) return NextResponse.redirect(new URL("/admin/auth/login", req.url));

        const { email, expires } = JSON.parse(atob(authToken));
        if (!email || !expires)
            return cookieStore.delete("auth_token"), NextResponse.redirect(new URL("/admin/auth/login", req.url));

        if (new Date() > new Date(expires))
            return cookieStore.delete("auth_token"), NextResponse.redirect(new URL("/admin/auth/login", req.url));
        return NextResponse.next();
    } catch {
        return NextResponse.redirect(new URL("/admin/auth/login", req.url));
    }
}

export const config = {
    matcher: "/admin/dashboard/:path*"
};
