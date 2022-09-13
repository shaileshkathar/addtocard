import express from "express";
import { createproducts } from "../controller/productscontroller.js";

const router = express.Router();

router.route("/products").post(createproducts);

export default router;
