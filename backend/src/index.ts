import express from "express";
import authRoutes from "../src/routes/authRoutes.js";
import cookieParser from "cookie-parser";

import dotenv from "dotenv"
import messageRoutes from "./routes/messageRoutes.js";
dotenv.config();


const app = express()

app.use(cookieParser()); // use for parsing cookies
app.use(express.json()); // use for application/json

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)

app.listen(5000, () => {
    console.log("Server running on port 5000")

})