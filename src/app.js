import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import postRoutes from "./routes/post.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config()

const app = express();


app.use(express.json())
app.use(morgan("dev"))

// == Routes ===============
// Information of the api
app.get("/", (req, res) => {
    res.json({});
});

// Status of the app
app.get("/ping", (req, res) => {
    res.json({
        "ping": "pong"
    });
});

// posts things
app.use("/posts", postRoutes);

// auth things
app.use("/auth", authRoutes);

// stadistic things
//app.use("/stadistic")

// == Output info ==========
export default app;
