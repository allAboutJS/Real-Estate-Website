"use server";

import getDbClient from "@/app/_config/dbConfig";

const searchProducts = async (text, limit, omitArchived = false) => {
    const client = getDbClient();
    try {
        await client.connect();

        let queryParams = [text];
        let query = `
            SELECT id, name, property_type, address, availability_status, price, featured_image_url, archived 
                FROM properties WHERE to_tsvector('english', address || ' ' || name || ' ' || price || ' ' || property_type || ' ' || availability_status) @@ plainto_tsquery($1)
        `;

        if (omitArchived) {
            query += " AND archived = false";
        }

        if (limit && Number.isInteger(limit)) {
            query += " LIMIT $2";
            queryParams.push(limit);
        }

        query += " ORDER BY created_at DESC";

        const { rows } = await client.query(query, queryParams);
        console.log(rows);
        return { success: true, data: rows };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default searchProducts;
