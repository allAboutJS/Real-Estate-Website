import getDbClient from "../_config/dbConfig";

const getPropertiesMetadata = async (limit, omitArchived = false) => {
    const client = getDbClient();
    try {
        await client.connect();

        let query = `
            SELECT id, name, property_type, address, availability_status, price, featured_image_url, archived 
            FROM properties
        `;

        if (omitArchived) {
            query += " WHERE archived = false";
        }

        if (limit && Number.isInteger(limit)) {
            query += " LIMIT $1";
            const { rows } = await client.query(query, [limit]);
            return { success: true, data: rows };
        }

        query += " ORDER BY created_at DESC";

        const { rows } = await client.query(query);
        return { success: true, data: rows };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default getPropertiesMetadata;
