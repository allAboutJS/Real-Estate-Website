"use server";

import getDbClient from "../_config/dbConfig";

const getBlogPost = async (slug, table = "blog_posts") => {
    const client = getDbClient();

    try {
        await client.connect();

        const query =
            table === "blog_posts"
                ? "SELECT * FROM blog_posts WHERE slug = $1 LIMIT 1"
                : table === "blog_archives"
                ? "SELECT * FROM blog_archives WHERE slug = $1 LIMIT 1"
                : table === "blog_drafts"
                ? "SELECT * FROM blog_drafts WHERE slug = $1 LIMIT 1"
                : "";
        const { rows } = await client.query(query, [slug]);

        return { success: true, data: rows[0] };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default getBlogPost;
