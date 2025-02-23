import getDbClient from "../_config/dbConfig";

const getPropertiesMetadata = async (limit, omitArchived = false) => {
    const client = getDbClient();
    try {
        await client.connect();

        let query;
        if (omitArchived) {
            query =
                limit && Number.isInteger(limit)
                    ? `SELECT id, name, property_type, address, availability_status, price, featured_image_url, archived FROM properties WHERE archived = false LIMIT ${limit}`
                    : "SELECT id, name, property_type, address, availability_status, price, featured_image_url, archived FROM properties WHERE archived = false";
        } else {
            query =
                limit && Number.isInteger(limit)
                    ? `SELECT id, name, property_type, address, availability_status, price, featured_image_url, archived FROM properties LIMIT ${limit}`
                    : "SELECT id, name, property_type, address, availability_status, price, featured_image_url, archived FROM properties";
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
