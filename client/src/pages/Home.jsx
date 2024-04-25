import { useState } from "react";
import Header from "../components/Header";
import Menu from "./Menu";
import MenuDisplay from "../components/MenuDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <MenuDisplay />
    </div>
  );
};
export default Home;
