import express from "express";
import {
  forgotPassword,
  loginUser,
  logoutUser,
  register,
  resetPassword,
} from "../controllers/auth.controller.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";
import {
  deleteAdminUser,
  getAdminUser,
  getAllUsers,
  getUser,
  updateAdminUser,
  updatePassword,
  updateProfile,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/user/register").post(register);
router.route("/user/login").post(loginUser);
router.route("/user/logout").get(logoutUser);
router.route("/user/password/forgot").post(forgotPassword);
router.route("/user/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/user/password/reset/:token").put(resetPassword);
router.route("/user/profile").get(isAuthenticatedUser, getUser);
router.route("/user/profile/update").put(isAuthenticatedUser, updateProfile);
router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
router
  .route("/admin/users/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminUser)
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateAdminUser)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAdminUser);

export default router;
