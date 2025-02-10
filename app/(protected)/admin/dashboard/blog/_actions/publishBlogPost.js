"use server";

import getDbClient from "@/app/_config/dbConfig";

const publishBlogPost = async (slug, table = "blog_archives") => {
    const client = getDbClient();

    try {
        await client.connect();

        const transferQuery =
            table === "blog_archives"
                ? `INSERT INTO blog_posts  (title, slug, body, summary, featured_image_url, assets) SELECT  title, slug, body, summary, featured_image_url, assets FROM blog_archives WHERE slug = $1`
                : table === "blog_drafts"
                ? `INSERT INTO blog_posts  (title, slug, body, summary, featured_image_url, assets) SELECT  title, slug, body, summary, featured_image_url, assets FROM blog_drafts WHERE slug = $1`
                : "";
        const deleteQuery =
            table === "blog_archives"
                ? `DELETE FROM blog_archives WHERE slug = $1`
                : table === "blog_drafts"
                ? `DELETE FROM blog_drafts WHERE slug = $1`
                : "";

        await client.query(transferQuery, [slug]);
        await client.query(deleteQuery, [slug]);
        return { success: true };
    } catch {
        return { success: false };
    } finally {
        client.end();
    }
};

export default publishBlogPost;
