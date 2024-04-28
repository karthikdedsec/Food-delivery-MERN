import { useState } from "react";
import Header from "../components/Header";
import Menu from "./Menu";

import AppDownload from "../components/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className="container">
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-semibold text-center">Explore our menu</h1>
        <p className="text-center">
          Savor the Flavor: Order Now for Delectable Delights Delivered Directly
          to Your Doorstep!
        </p>
      </div>

      <AppDownload />
    </div>
  );
};
export default Home;
