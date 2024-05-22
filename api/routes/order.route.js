import express from "express";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
import {
  createOrder,
  getOrderDetails,
} from "../controllers/order.controller.js";

const router = express.Router();

router.route("/orders/new").post(isAuthenticatedUser, createOrder);
router.route("/orders/:id").get(isAuthenticatedUser, getOrderDetails);

export default router;
