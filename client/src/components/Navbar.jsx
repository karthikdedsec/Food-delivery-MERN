import { useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="py-[20px] flex justify-between items-center">
      <img className="w-[150px]" src={assets.logo} alt="logo" />
      <ul className="md:flex hidden cursor-pointer list-none gap-3 text-[#49557e] text-lg">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </li>
        <li
          onClick={() => setMenu("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          mobile app
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          contact us
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <img className="hidden md:block" src={assets.search_icon} alt="" />
        <div className="relative">
          <img src={assets.basket_icon} alt="" />
          <div className="absolute flex justify-center items-center rounded-full p-2 w-6 h-6 border-orange-600 border-2 -top-4 -right-4">
            <span className="text-sm">2</span>
          </div>
        </div>
        <button className="bg-transparent cursor-pointer hover:bg-orange-200 hover:text-white text-base text-[#49557e] border-orange-400 border-2 rounded-md py-[10px] px-[30px] transition duration-200">
          sign in
        </button>
      </div>
    </div>
  );
};
export default Navbar;
