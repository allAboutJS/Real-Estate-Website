"use server";

import getDbClient from "@/app/_config/dbConfig";

const initTables = async () => {
    const client = getDbClient();
    try {
        await client.connect();
        await client.query(`
                CREATE TABLE IF NOT EXISTS blog_posts (
                    slug VARCHAR(100) UNIQUE,
                    title TEXT,
                    summary TEXT,
                    featured_image_url TEXT,
                    body TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    last_updated_at TIMESTAMP,
                    assets JSON,
                    archived BOOLEAN DEFAULT FALSE,
                    is_draft BOOLEAN DEFAULT FALSE
                )
            `);
        await client.query(`
                CREATE TABLE IF NOT EXISTS admin (
                    email VARCHAR(100) UNIQUE,
                    password VARCHAR(100),
                    login_attempts INTEGER,
                    last_login_attempt TIMESTAMP
                )
            `);
        await client.query(`
                CREATE TABLE IF NOT EXISTS messages (
                    id VARCHAR(100),
                    fullname VARCHAR(100),
                    email VARCHAR(100),
                    phone_number VARCHAR(24),
                    message TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    seen BOOLEAN DEFAULT FALSE
                )
        `);
        await client.query(`
            CREATE TABLE IF NOT EXISTS properties (
                id SERIAL PRIMARY KEY,
                name TEXT,
                description TEXT,
                price NUMERIC,
                address TEXT,
                featured_image_url TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP,
                property_type VARCHAR(10) CHECK (property_type IN ('land', 'house', 'apartment', 'office', 'shop', 'warehouse')) NOT NULL,
                availability_status VARCHAR(4) CHECK (availability_status IN ('sale', 'rent')) NOT NULL,
                assets JSON
            )
        `);
    } catch {
        return;
    } finally {
        client.end();
    }
};

export default initTables;
