"use server";

import getDbClient from "../_config/dbConfig";

const getBlogPost = async (slug) => {
    const client = getDbClient();

    try {
        await client.connect();

        const query = "SELECT * FROM blog_posts WHERE slug = $1 LIMIT 1";
        const { rows } = await client.query(query, [slug]);

        return { success: rows.length ? true : false, data: rows[0] };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default getBlogPost;
