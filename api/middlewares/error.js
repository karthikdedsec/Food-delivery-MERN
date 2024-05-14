import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
  let error = {
    statusCode: err?.statusCode || 500,
    message: err?.message || "Internal server error",
  };

  //handle invalid mongoose id error
  if (err.name === "CastError") {
    const message = `Resource not found.Invalid: ${err?.path}`;
    error = new ErrorHandler(message, 404);
  }
  //handle validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 404);
  }

  //duplicate key error
  if (err.code === 11000) {
    const message = `${Object.keys(err.keyValue).map(
      (key) => key
    )} : ${Object.values(err.keyValue).map((val) => val)} already exists`;

    error = new ErrorHandler(message, 400);
  }

  res.status(error.statusCode).json({
    message: error.message,
    error: err,
    stack: err?.stack,
  });
};
