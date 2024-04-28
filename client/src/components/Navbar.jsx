import { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  return (
    <div className="py-[20px] flex justify-between items-center container">
      <img className="w-[150px]" src={assets.logo} alt="logo" />
      <ul className="md:flex hidden cursor-pointer list-none gap-3 text-[#49557e] text-lg">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          <Link to="/menu">menu</Link>
        </li>
        <li
          onClick={() => setMenu("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          <Link to="/menu">Mobile app</Link>
        </li>
        <li
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          <Link to="/menu">Contact us</Link>
        </li>
      </ul>
      <div className="flex items-center gap-6">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="bg-transparent cursor-pointer hover:bg-orange-200 hover:text-white text-base text-[#49557e] border-orange-400 border-2 rounded-md py-[10px] px-[30px] transition duration-200"
        >
          sign in
        </button>
      </div>
    </div>
  );
};
export default Navbar;
