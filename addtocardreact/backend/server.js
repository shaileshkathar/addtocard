import express from "express";
import mysql from "mysql";
import db from "./config/db.js";
import user from "./routes/userroutes.js";
import cors from "cors";
import products from "./routes/products.js";
const app = express();

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}
app.use(express.json());
app.use(cors());
app.use("/api/v1/", user);
app.use("/api/v1/", products);

app.listen(5000, () => console.log("server is running on 5000"));
