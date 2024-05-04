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

//get single product - api/v1/products/:id
export const getProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  res.status(200).json({
    product,
  });
};

//update product - api/v1/admin/products/:id
export const updateProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({
      error: "product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req?.params?.id, req.body, {
    new: true,
  });

  res.status(200).json({
    product,
  });
};
