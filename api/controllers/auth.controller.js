import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../utils/errorHandler.js";
import User from "../models/user.js";

//register user => /api/v1/user/register
export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });

  const token = user.getJwtToken();
  res.status(201).json({
    message: "user created",
    token,
  });
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
  const token = user.getJwtToken();

  res.status(200).json({
    user,
    token,
  });
});
