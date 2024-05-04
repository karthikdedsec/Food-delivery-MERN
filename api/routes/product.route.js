import express from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  newProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.route("/admin/products").get(getProducts);
router.route("/admin/products/:id").put(updateProduct).delete(deleteProduct);
router.route("/admin/products/new").post(newProduct);
router.route("/products/:id").get(getProduct);

export default router;
