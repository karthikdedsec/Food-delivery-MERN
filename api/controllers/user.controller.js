import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/user.js";

//get user profile => /api/v1/user/profile
export const getUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    return next(new ErrorHandler("user not found", 404));
  }

  res.status(200).json({
    user,
  });
});

//change or update password =? /api/v1/user/password/update
export const updatePassword = catchAsyncErrors(async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;
  const user = await User.findById(req?.user?._id).select("+password");

  const compared = await user.comparePasswords(currentPassword);

  if (!compared) {
    return next(new ErrorHandler("current password is incorrect", 400));
  }

  user.password = newPassword;

  user.save();

  res.status(200).json({
    message: "password updated successfully",
  });
});
