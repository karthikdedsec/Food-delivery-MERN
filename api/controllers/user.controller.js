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

//update user profile
export const updateProfile = catchAsyncErrors(async (req, res, next) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user._id, userData, {
    new: true,
  });

  res.status(200).json({
    user,
  });
});

//get all users - ADMIN => /api/v1/admin/users
export const getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    users,
  });
});

//get specific user - ADMIN => /api/v1/admin/users/:id
export const getAdminUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`user not found with id : ${req.params.id} `, 404)
    );
  }

  res.status(200).json({
    user,
  });
});

//update user ADMIN => /api/v1/admin/users/:id
export const updateAdminUser = catchAsyncErrors(async (req, res, next) => {
  const userData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, userData, {
    new: true,
  });

  res.status(200).json({
    user,
  });
});

//delete user ADMIN => /api/v1/admin/users/:id
export const deleteAdminUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHandler(`user not found with id : ${req.params.id} `, 404)
    );
  }

  //TODO delete user avatar from cloudinary

  await user.deleteOne();

  res.status(200).json({
    message: "user deleted",
  });
});
