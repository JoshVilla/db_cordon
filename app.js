
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
// app.get("/admin", (req, res) => {
//     let user = [];
//     connect.collection('admin')
//     .find()
//     .sort({ username: 1 })
//     .forEach((users) => user.push(users))
//     .then(() => {
//       res.status(200).json(user);
//     })
//     .catch(() => {
//       res.status(500).json({ error: "Could not fetch the data" });
//     });
//     res.send("<h1> Admin is Working </h1>");
// });

export default app;