import express from "express";
import { getProducts, newProduct } from "../controllers/product.controller.js";

const router = express.Router();

router.route("/admin/products").get(getProducts);
router.route("/admin/products/new").post(newProduct);

export default router;
