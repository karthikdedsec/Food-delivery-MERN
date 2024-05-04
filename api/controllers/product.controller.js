import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import Product from "../models/product.js";
import ErrorHandler from "../utils/errorHandler.js";

//create new product - api/v1/admin/products/new
export const newProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    product,
  });
});

//get all products - api/v1/admin/products
export const getProducts = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.find();

  res.status(200).json({
    product,
  });
});

//get single product - api/v1/products/:id
export const getProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  res.status(200).json({
    product,
  });
});

//update product - api/v1/admin/products/:id
export const updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
  });

  res.status(200).json({
    product,
  });
});

//delete product - api/v1/admin/products/:id
export const deleteProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  product = await Product.findByIdAndDelete(req?.params?.id);

  res.status(200).json({
    message: "product deleted",
  });
});
