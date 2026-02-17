import React from "react";
import { Link, NavLink } from "react-router";
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-5 md:px-15">
        <div className="navbar-start">
          <Link to="/" className="font-semibold text-3xl text-indigo-600 hover:text-indigo-700 transition-colors">SwiftCart</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 px-1">
            <NavLink to="/" className={({isActive}) => isActive ? "text-indigo-600 underline decoration-indigo-600 underline-offset-4" : "hover:text-indigo-600 transition-colors"}>Home</NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? "text-indigo-600 underline decoration-indigo-600 underline-offset-4" : "hover:text-indigo-600 transition-colors"}>Products</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "text-indigo-600 underline decoration-indigo-600 underline-offset-4" : "hover:text-indigo-600 transition-colors"}>About</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "text-indigo-600 underline decoration-indigo-600 underline-offset-4" : "hover:text-indigo-600 transition-colors"}>Contact</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/cart" className="text-3xl text-indigo-600 hover:text-indigo-700 transition-colors rounded-4xl">
            <CiShoppingCart />
          </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost rounded-4xl lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content bg-base-100 rounded-box z-1 mt-3 w-35 p-2 shadow overflow-auto flex flex-col gap-2"
            >
              <NavLink to="/" className={({isActive}) => isActive ? "text-indigo-600 underline decoration-indigo-600 underline-offset-4 px-2 py-1" : "hover:text-indigo-600 transition-colors px-2 py-1"}>Home</NavLink>
              <NavLink to="/products" className={({isActive}) => isActive ? "text-indigo-600 underline decoration-indigo-600 underline-offset-4 px-2 py-1" : "hover:text-indigo-600 transition-colors px-2 py-1"}>Products</NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? "text-indigo-600 underline decoration-indigo-600 underline-offset-4 px-2 py-1" : "hover:text-indigo-600 transition-colors px-2 py-1"}>About</NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? "text-indigo-600 underline decoration-indigo-600 underline-offset-4 px-2 py-1" : "hover:text-indigo-600 transition-colors px-2 py-1"}>Contact</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
