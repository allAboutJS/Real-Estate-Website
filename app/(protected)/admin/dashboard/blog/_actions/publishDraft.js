import getDbClient from "@/app/_config/dbConfig";

const publishDraft = async (slug) => {
    const client = getDbClient();

    try {
        const transferQuery = `UPDATE blog_posts  SET is_draft = false WHERE slug = $1`;

        await client.query(transferQuery, [slug]);
        return { success: true };
    } catch {
        return { success: false };
    } finally {
        client.end();
    }
};

export default publishDraft;
