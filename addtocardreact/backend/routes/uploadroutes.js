import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

router.route("/upload").post(upload.single("image"));

export default router;
