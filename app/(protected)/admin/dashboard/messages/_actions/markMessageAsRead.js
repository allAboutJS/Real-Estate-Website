"use server";

import getDbClient from "@/app/_config/dbConfig";

const markMessageAsRead = async (id) => {
    const client = getDbClient();
    try {
        await client.connect();
        const query = `UPDATE messages SET seen = true WHERE id = $1`;
        const values = [id];

        await client.query(query, values);
        return { success: true };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default markMessageAsRead;
