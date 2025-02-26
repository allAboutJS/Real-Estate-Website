"use server";

import getDbClient from "@/app/_config/dbConfig";

const createProperty = async (form, isEdit) => {
    const client = getDbClient();
    try {
        await client.connect();

        const { name, address, price, type, availability_status, description, assets, featured_image_url } = form;
        const values = [name, address, price, type, availability_status, description, assets, featured_image_url];
        const query = isEdit
            ? "UPDATE properties SET name = $1, address = $2, price = $3, property_type = $4, availability_status = $5, description = $6, assets = $7, featured_image_url = $8 WHERE id = $9"
            : "INSERT INTO properties (name, address, price, property_type, availability_status, description, assets, featured_image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";

        if (isEdit) values.push(form.id);

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
