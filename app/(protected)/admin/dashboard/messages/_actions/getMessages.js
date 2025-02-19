"use server";

import getDbClient from "@/app/_config/dbConfig";

const getMessages = async () => {
    const client = getDbClient();
    try {
        await client.connect();
        const query = "SELECT * FROM messages";
        const result = await client.query(query);

        return { success: true, data: result.rows };
    } catch (error) {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default getMessages;
