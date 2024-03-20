
import dotenv from 'dotenv';
import connect  from "./database/db.js";
import express from 'express';

dotenv.config();

try {
    await connect();
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Failed to connect to MongoDB:", error);
}

const app = express();

app.get("/", (req, res) => {
    res.send("<h1> Server is Working </h1>");
});

export default app;