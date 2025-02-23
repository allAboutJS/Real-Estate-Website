"use server";

import getDbClient from "@/app/_config/dbConfig";

const updateBlogPost = async (slug, blogPost, { asDraft = false, archived = false }) => {
    const client = getDbClient();

    try {
        const { title, featuredImageUrl, summary, body, assets } = blogPost;
        const updateQuery =
            "UPDATE blog_posts SET title = $1, slug = $2, body = $3, summary = $4, featured_image_url = $5, assets = $6, last_updated_at = $7, is_draft = $8, archived = $9 WHERE slug = $10";

        await client.connect();
        await client.query(updateQuery, [
            title,
            blogPost.slug,
            body,
            summary,
            featuredImageUrl,
            assets,
            new Date(),
            asDraft,
            archived,
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
