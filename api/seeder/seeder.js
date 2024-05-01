import mongoose from "mongoose";
import Product from "../models/product.js";
import products from "../seeder/data.js";

const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/tomato-v1");

    await Product.deleteMany();
    console.log("products are deleted");
    await Product.insertMany(products);
    console.log("products are added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
