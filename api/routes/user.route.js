import express from "express";
import { loginUser, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/user/register").post(register);
router.route("/user/login").post(loginUser);

export default router;
