"use server";

import getDbClient from "@/app/_config/dbConfig";
import deleteAssets from "../../_actions/deleteAssets";

const deletePost = async (slug, table = "blog_posts") => {
    const client = getDbClient();

    try {
        await client.connect();

        const getBlogAssetsQuery =
            table === "blog_archives"
                ? `SELECT assets FROM blog_archives WHERE slug = $1`
                : table === "blog_drafts"
                ? `SELECT assets FROM blog_drafts WHERE slug = $1`
                : table === "blog_posts"
                ? `SELECT assets FROM blog_posts WHERE slug = $1`
                : "";
        const deleteQuery =
            table === "blog_archives"
                ? `DELETE FROM blog_archives WHERE slug = $1`
                : table === "blog_drafts"
                ? `DELETE FROM blog_drafts WHERE slug = $1`
                : table === "blog_posts"
                ? `DELETE FROM blog_posts WHERE slug = $1`
                : "";
        const { assets } = (await client.query(getBlogAssetsQuery, [slug])).rows[0];

        if (assets) await deleteAssets(...assets);
        await client.query(deleteQuery, [slug]);
        return { success: true };
    } catch (e) {
        console.log(e);
        return { success: false };
    } finally {
        client.end();
    }
};

export default deletePost;
