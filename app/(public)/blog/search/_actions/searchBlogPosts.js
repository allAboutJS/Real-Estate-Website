"use server";

import getDbClient from "@/app/_config/dbConfig";

const searchBlogPosts = async (text, limit) => {
    const client = getDbClient();
    try {
        await client.connect();

        let queryParams = [text];
        let query = `
            SELECT title, summary, slug, featured_image_url, created_at, last_updated_at, is_draft, archived 
                FROM blog_posts WHERE to_tsvector('english', title || ' ' || slug || ' ' || summary || ' ' || body) @@ plainto_tsquery($1) AND archived = false AND is_draft = false
        `;

        if (limit && Number.isInteger(limit)) {
            query += " LIMIT $2";
            queryParams.push(limit);
        }

        query += " ORDER BY created_at DESC";

        const { rows } = await client.query(query, queryParams);
        return { success: true, data: rows };
    } catch (error) {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default searchBlogPosts;
