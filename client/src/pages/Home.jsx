import { useState } from "react";
import Header from "../components/Header";
import Menu from "./Menu";

import AppDownload from "../components/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="container">
      <Header />
      <div className="flex flex-col gap-9">
        <h1 className="text-6xl font-semibold text-center mt-6">
          Explore our menu
        </h1>
        <p className="text-center">
          Savor the Flavor: Order Now for Delectable Delights Delivered Directly
          to Your Doorstep!
        </p>
        <div className="flex justify-center items-center">
          <button className="bg-[tomato] px-6 py-3 text-white rounded-full">
            Order Now!
          </button>
        </div>
      </div>

      <AppDownload />
    </div>
  );
};
export default Home;
