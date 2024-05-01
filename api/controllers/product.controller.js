import Product from "../models/product.js";

//create new product - api/v1/admin/products/new
export const newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(200).json({
    product,
  });
};

//get all products - api/v1/admin/products
export const getProducts = async (req, res, next) => {
  const product = await Product.find();

  res.status(200).json({
    product,
  });
};
