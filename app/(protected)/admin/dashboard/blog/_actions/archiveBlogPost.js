"use server";

import getDbClient from "@/app/_config/dbConfig";

const archiveBlogPost = async (slug) => {
    const client = getDbClient();

    try {
        await client.connect();

        const query = `UPDATE blog_posts SET archived = true WHERE slug = $1`;

        await client.query(query, [slug]);
        return { success: true };
    } catch {
        return { success: false };
    } finally {
        client.end();
    }
};

export default archiveBlogPost;
