import { Client } from "pg";

export const getDbClient = () =>
    new Client({
        connectionString: process.env.DB_URL,
        connectionTimeoutMillis: 10_000,
        query_timeout: 10_000,
        ssl: process.env.NODE_ENV === "production" ? true : undefined
    });

export default getDbClient;
