import express from "express";
import {
  getProduct,
  getProducts,
  newProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.route("/admin/products").get(getProducts);
router.route("/admin/products/:id").put(updateProduct);
router.route("/admin/products/new").post(newProduct);
router.route("/products/:id").get(getProduct);

export default router;
