"use server";

import getDbClient from "@/app/_config/dbConfig";

const getBlogPostsMetadata = async (limit) => {
    const client = getDbClient();
    try {
        await client.connect();
        const query =
            "SELECT title, summary, slug, featured_image_url, created_at, last_updated_at, is_draft, archived FROM blog_posts";
        const { rows } = limit ? await client.query(`${query} LIMIT $1`, [limit]) : await client.query(query);

        return { success: true, data: rows };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default getBlogPostsMetadata;
