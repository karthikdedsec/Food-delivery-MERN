import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/user.js";
import sendToken from "../utils/sendToken.js";
import { getPasswordResetTemplate } from "../utils/emailTemplate.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

//register user => /api/v1/user/register
export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });

  sendToken(user, 200, res);
});

//login user => /api/v1/user/login
export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("please enter email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("invalid email or password", 404));
  }

  const isPasswordMatch = await user.comparePasswords(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("invalid email or password", 404));
  }
  sendToken(user, 200, res);
});

//logout user => /api/v1/user/logout
export const logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.clearCookie("token").json({
    message: "logged out",
  });
});

//forgot password => /api/v1/user/password/forgot
export const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("user not found with this email", 404));
  }

  const resetToken = user.getResetPasswordToken();

  await user.save();

  const resetUrl = `${process.env.FRONTEND_URL}/api/v1/user/password/reset/${resetToken}`;

  const message = getPasswordResetTemplate(user?.name, resetUrl);

  try {
    await sendEmail({
      email: user?.email,
      subject: `Tomato Password Recovery`,
      message,
    });

    res.status(200).json({
      message: `email sent to ${user?.email}`,
    });
  } catch (error) {
    (user.resetPasswordToken = undefined),
      (user.resetPasswordExpire = undefined),
      await user.save();

    return next(new ErrorHandler(error?.message, 500));
  }
});

//reset password => /api/v1/user/password/reset/:token
export const resetPassword = catchAsyncErrors(async (req, res, next) => {
  const { password, confirmPassword } = req.body;
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req?.params?.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler("invalid token or reset password link expired", 400)
    );
  }

  if (password !== confirmPassword) {
    return next(new ErrorHandler("password does not match", 400));
  }

  //set new password
  user.password = password;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});
