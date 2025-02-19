"use server";

import getDbClient from "@/app/_config/dbConfig";

const deleteMessage = async (id) => {
    const client = getDbClient();

    try {
        await client.connect();
        const query = `DELETE FROM messages WHERE id = $1`;
        const values = [id];

        await client.query(query, values);
        return { success: true };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default deleteMessage;
