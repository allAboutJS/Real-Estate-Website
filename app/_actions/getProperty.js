"use server";

import getDbClient from "../_config/dbConfig";

const getProperty = async (id) => {
    const client = getDbClient();

    try {
        await client.connect();

        const query = "SELECT * FROM properties WHERE id = $1 LIMIT 1";
        const { rows } = await client.query(query, [id]);

        return { success: rows.length ? true : false, data: rows[0] };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default getProperty;
