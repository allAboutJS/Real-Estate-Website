"use server";

import getDbClient from "@/app/_config/dbConfig";
import deleteAssets from "../../_actions/deleteAssets";

const deleteProperty = async (id) => {
    const client = getDbClient();

    try {
        const assetsQuery = "SELECT assets FROM properties WHERE id = $1";
        const deleteQuery = "DELETE FROM properties WHERE id = $1";
        const values = [id];

        await client.connect();

        const { rows } = await client.query(assetsQuery, values);

        await deleteAssets(...rows[0].assets);
        await client.query(deleteQuery, values);
        return { success: true };
    } catch {
        return { success: false };
    } finally {
        await client.end();
    }
};

export default deleteProperty;
