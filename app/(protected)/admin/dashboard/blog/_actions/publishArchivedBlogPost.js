"use server";

import getDbClient from "@/app/_config/dbConfig";

const publishArchivedBlogPost = async (slug) => {
    const client = getDbClient();

    try {
        await client.connect();

        const transferQuery = "UPDATE blog_posts  SET archived = false, is_draft = false WHERE slug = $1";

        await client.query(transferQuery, [slug]);
        return { success: true };
    } catch {
        return { success: false };
    } finally {
        client.end();
    }
};

export default publishArchivedBlogPost;
