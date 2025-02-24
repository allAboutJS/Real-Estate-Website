import express from "express";
import next from "next";
import { parse } from "url";
import { config } from "dotenv";

config();

const server = express();
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handleRequest = app.getRequestHandler();

app.prepare().then(() => {
    server.all("*", (req, res) => handleRequest(req, res, parse(req.url, true)));

    server.listen(process.env.PORT || "3000");
});
