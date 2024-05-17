import express from "express";
import {
  forgotPassword,
  loginUser,
  logoutUser,
  register,
  resetPassword,
} from "../controllers/auth.controller.js";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import { getUser } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/user/register").post(register);
router.route("/user/login").post(loginUser);
router.route("/user/logout").get(logoutUser);
router.route("/user/password/forgot").post(forgotPassword);
router.route("/user/password/reset/:token").put(resetPassword);
router.route("/user/profile").get(isAuthenticatedUser, getUser);

export default router;
