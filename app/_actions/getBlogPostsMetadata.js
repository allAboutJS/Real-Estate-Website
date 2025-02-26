"use server";

import getDbClient from "@/app/_config/dbConfig";

const getBlogPostsMetadata = async (limit, omitHidden = false) => {
    const client = getDbClient();
    try {
        await client.connect();

        let query = `
            SELECT title, summary, slug, featured_image_url, created_at, last_updated_at, is_draft, archived 
            FROM blog_posts
        `;

        if (omitHidden) {
            query += " WHERE is_draft = false AND archived = false";
        }

        if (limit && Number.isInteger(limit)) {
            query += " LIMIT $1";
            const { rows } = await client.query(query, [limit]);
            return { success: true, data: rows };
        }

        query += "ORDER BY created_at DESC";

        const { rows } = await client.query(query);
        return { success: true, data: rows };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default getBlogPostsMetadata;
