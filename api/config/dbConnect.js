import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_LOCAL_URI).then((con) => {
    console.log(`connected to db with HOST: ${con?.connection?.host}`);
  });
};
