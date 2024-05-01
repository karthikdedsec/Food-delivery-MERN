import Product from "../models/product.js";

export const getProducts = (req, res, next) => {
  res.status(200).json({
    message: "success",
  });
};

export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    product,
  });
};
