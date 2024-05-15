import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import productRoute from "./routes/product.route.js";
import userRoute from "./routes/user.route.js";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/error.js";

const app = express();

//handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("shutting down due to uncaught exception");
  process.exit(1);
});

dotenv.config({ path: "config/config.env" });

//connect database
connectDatabase();
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/v1/", productRoute);
app.use("/api/v1/", userRoute);

//using middleware
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});

//handle unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err}`);
  console.log("shutting down server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
