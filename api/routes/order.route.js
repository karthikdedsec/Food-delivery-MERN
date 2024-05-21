import express from "express";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
import { createOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.route("/orders/new").post(isAuthenticatedUser, createOrder);

export default router;
