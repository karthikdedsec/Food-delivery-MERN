import { useState } from "react";
import { menu_list } from "../assets/assets";
import MenuDisplay from "../components/MenuDisplay";

const Menu = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className="space-y-9 mt-9 container">
      <h1 className="text-6xl font-semibold text-center">Explore our menu</h1>
      <p className="text-center">
        Savor the Flavor: Order Now for Delectable Delights Delivered Directly
        to Your Doorstep!
      </p>
      <div className="flex gap-6 items-center my-[20px] text-center justify-between overflow-x-scroll scrollbar-hide">
        {menu_list.map((item, i) => (
          <div onClick={() => setCategory(item.menu_name)} key={i} className="">
            <img
              className={
                category === item.menu_name
                  ? "border-4 rounded-full border-orange-400 w-[7.5vw] min-w-[80px] cursor-pointer border-[50%] transition duration-200"
                  : "w-[7.5vw] min-w-[80px] cursor-pointer border-[50%] transition duration-200"
              }
              src={item.menu_image}
              alt="item"
            />
            <p className="mt-3 text-[#747474] text-lg">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="m-6 h-[2px] bg-[#e2e2e2] border-none" />
      <MenuDisplay category={category} />
    </div>
  );
};
export default Menu;
