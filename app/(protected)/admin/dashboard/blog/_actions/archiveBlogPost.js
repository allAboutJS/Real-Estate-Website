"use server";

import getDbClient from "@/app/_config/dbConfig";

const archiveBlogPost = async (slug) => {
    const client = getDbClient();

    try {
        await client.connect();

        const transferQuery = `INSERT INTO blog_archives  (title, slug, body, summary, featured_image_url, assets) SELECT title, slug, body, summary, featured_image_url, assets FROM blog_posts WHERE slug = $1`;
        const deleteQuery = `DELETE FROM blog_posts WHERE slug = $1`;

        await client.query(transferQuery, [slug]);
        await client.query(deleteQuery, [slug]);
        return { success: true };
    } catch {
        return { success: false };
    } finally {
        client.end();
    }
};

export default archiveBlogPost;
