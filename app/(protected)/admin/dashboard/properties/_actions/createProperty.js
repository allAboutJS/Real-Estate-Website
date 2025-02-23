"use server";

import getDbClient from "@/app/_config/dbConfig";

const createProperty = async (form) => {
    const client = getDbClient();
    try {
        await client.connect();

        const { name, address, price, type, availability_status, description, assets, featured_image_url } = form;
        const query =
            "INSERT INTO properties (name, address, price, property_type, availability_status, description, assets, featured_image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";
        const values = [name, address, price, type, availability_status, description, assets, featured_image_url];

        await client.query(query, values);
        return { success: true };
    } catch (error) {
        console.log(error);
        return { success: false };
    } finally {
        await client.end();
    }
};

export default createProperty;
