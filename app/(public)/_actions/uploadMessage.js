"use server";

import getDbClient from "../../_config/dbConfig";
import crypto from "node:crypto";

const uploadMessage = async (form) => {
    const client = getDbClient();

    try {
        const { fullname, email, phoneNumber, message } = form;

        await client.connect();
        await client.query(
            `
            INSERT INTO messages (id, fullname, email, phone_number, message) 
            VALUES ($1, $2, $3, $4, $5)
        `,
            [crypto.randomUUID(), fullname, email, phoneNumber, message]
        );

        return { success: true };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default uploadMessage;
