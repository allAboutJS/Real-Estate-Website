import getDbClient from "@/app/_config/dbConfig";

const getPropertiesMetadata = async (limit, omitArchived = false) => {
    const client = getDbClient();
    try {
        await client.connect();

        let query = `
            SELECT * FROM properties
        `;

        if (omitArchived) {
            query += " WHERE archived = false";
        }

        query += " ORDER BY created_at DESC";

        if (limit && Number.isInteger(limit)) {
            query += " LIMIT $1";
            const { rows } = await client.query(query, [limit]);
            return { success: true, data: rows };
        }

        const { rows } = await client.query(query);
        return { success: true, data: rows };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default getPropertiesMetadata;
