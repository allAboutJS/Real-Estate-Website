"use server";

import getDbClient from "@/app/_config/dbConfig";

const uploadBlogPost = async (blogPost, asDraft = false) => {
    const client = getDbClient();
    try {
        const { title, slug, featuredImageUrl, summary, body, assets } = blogPost;

        await client.connect();
        await client.query(
            asDraft === true
                ? "INSERT INTO blog_posts (title, slug, body, summary, featured_image_url, assets, is_draft) VALUES ($1, $2, $3, $4, $5, $6, $7)"
                : "INSERT INTO blog_posts (title, slug, body, summary, featured_image_url, assets) VALUES ($1, $2, $3, $4, $5, $6)",
            asDraft
                ? [title, slug, body, summary, featuredImageUrl, assets, true]
                : [title, slug, body, summary, featuredImageUrl, assets]
        );

        return { success: true };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default uploadBlogPost;
