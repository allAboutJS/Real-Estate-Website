"use server";

import getDbClient from "@/app/_config/dbConfig";

const togglePropertyArchivedState = async (id, archive = true) => {
    const client = getDbClient();
    try {
        let query;
        const values = [id];

        if (archive === true) query = "UPDATE properties SET archived = true WHERE id = $1";
        else if (archive === false) query = "UPDATE properties SET archived = false WHERE id = $1";
        else return { success: true };

        await client.connect();
        await client.query(query, values);
        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false };
    } finally {
        await client.end();
    }
};

export default togglePropertyArchivedState;
