import express from "express";
import {
  loginUser,
  logoutUser,
  register,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/user/register").post(register);
router.route("/user/login").post(loginUser);
router.route("/user/logout").get(logoutUser);

export default router;
