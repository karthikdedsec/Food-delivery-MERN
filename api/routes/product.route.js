import express from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  newProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router.route("/admin/products").get(getProducts);
router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, updateProduct)
  .delete(isAuthenticatedUser, deleteProduct);
router.route("/admin/products/new").post(newProduct);
router.route("/products/:id").get(getProduct);

export default router;
