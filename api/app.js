import express from "express";
import dotenv from "dotenv";
import productRoute from "./routes/product.route.js";
import { connectDatabase } from "./config/dbConnect.js";

const app = express();
dotenv.config({ path: "config/config.env" });

//connect database
connectDatabase();
app.use(express.json());

// routes
app.use("/api/v1/", productRoute);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
