import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const cookieStore = cookies();

    cookieStore.delete("auth_token", {
        name: "auth_token",
        httpOnly: true,
        secure: true
    });
    return NextResponse.redirect(new URL("/admin/auth/login", req.url));
};
