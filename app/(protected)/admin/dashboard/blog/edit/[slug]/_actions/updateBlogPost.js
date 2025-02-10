"use server";

import getDbClient from "@/app/_config/dbConfig";

const updateBlogPost = async (slug, blogPost, table = "blog_posts") => {
    const client = getDbClient();

    try {
        const { title, featuredImageUrl, summary, body, assets } = blogPost;
        const updateQuery =
            table === "blog_posts"
                ? "UPDATE blog_posts SET title = $1, slug = $2, body = $3, summary = $4, featured_image_url = $5, assets = $6, last_updated_at = $7 WHERE slug = $8"
                : table === "blog_drafts"
                ? "UPDATE blog_drafts SET title = $1, slug = $2, body = $3, summary = $4, featured_image_url = $5, assets = $6, last_updated_at = $7 WHERE slug = $8"
                : table === "blog_archives"
                ? "UPDATE blog_archives SET title = $1, slug = $2, body = $3, summary = $4, featured_image_url = $5, assets = $6, last_updated_at = $7 WHERE slug = $8"
                : "";

        await client.connect();
        await client.query(updateQuery, [
            title,
            blogPost.slug,
            body,
            summary,
            featuredImageUrl,
            assets,
            new Date(),
            slug
        ]);

        return { success: true };
    } catch (e) {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default updateBlogPost;
