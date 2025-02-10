"use server";

import getDbClient from "@/app/_config/dbConfig";
import { cookies } from "next/headers";

const login = async (form) => {
    const client = getDbClient();

    try {
        form = Object.fromEntries(form);
        form.password = btoa(form.password);
        await client.connect();

        const { rows } = await client.query(`SELECT * FROM admin WHERE email = $1 LIMIT 1`, [form.email]);
        if (!rows.length) return { success: false, error: "Incorrect login credentials." };

        const { password, login_attempts, last_login_attempt, email } = rows[0];
        const cookieStore = cookies();
        const validatePassword = async () => {
            if (password === form.password) {
                const expiryDate = new Date(Date.now() + 259_200_000);

                cookieStore.set("auth_token", btoa(JSON.stringify({ email, expires: expiryDate.toUTCString() })), {
                    expires: expiryDate,
                    path: "/admin",
                    httpOnly: true,
                    secure: true,
                    encode: btoa,
                    sameSite: "strict"
                });
                await client.query(`UPDATE admin SET last_login_attempt = $1, login_attempts = $2 WHERE email = $3`, [
                    null,
                    0,
                    email
                ]);
                return { success: true };
            } else {
                await client.query(`UPDATE admin SET last_login_attempt = $1, login_attempts = $2 WHERE email = $3`, [
                    new Date(Date.now() + 3_600_000).toUTCString(),
                    login_attempts ? login_attempts + 1 : 1,
                    email
                ]);
                return { success: false, error: "Incorrect login credentials." };
            }
        };

        if (!login_attempts || login_attempts < 5) return await validatePassword();
        else {
            if (new Date().getTime() - new Date(last_login_attempt).getTime() < 3_600_000)
                return { success: false, error: "Trial limit exceeded." };
            else return await validatePassword();
        }
    } catch {
        return { success: false, error: "Failed to complete request." };
    } finally {
        await client.end();
    }
};

export default login;
