"use server";

import getDbClient from "@/app/_config/dbConfig";
import deleteAssets from "../../_actions/deleteAssets";

const deletePost = async (slug) => {
    const client = getDbClient();

    try {
        await client.connect();

        const getBlogAssetsQuery = "SELECT assets FROM blog_posts WHERE slug = $1";
        const deleteQuery = "DELETE FROM blog_posts WHERE slug = $1";
        const { assets } = (await client.query(getBlogAssetsQuery, [slug])).rows[0];

        if (assets) await deleteAssets(...assets);
        await client.query(deleteQuery, [slug]);
        return { success: true };
    } catch {
        return { success: false };
    } finally {
        client.end();
    }
};

export default deletePost;
