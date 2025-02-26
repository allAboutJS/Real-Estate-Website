"use server";

import getDbClient from "@/app/_config/dbConfig";

const countRows = async (table) => {
    const client = getDbClient();
    try {
        await client.connect();
        const allowedTables = ["properties", "blog_posts", "messages"];

        if (!allowedTables.includes(table)) {
            throw new Error("Invalid table name");
        }

        const query = `SELECT COUNT(*) AS count FROM ${table}`;
        const { rows } = await client.query(query);

        return { success: true, data: rows[0].count };
    } catch {
        return { success: false, error: error.message };
    } finally {
        await client.end();
    }
};

export default countRows;
