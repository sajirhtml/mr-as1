import React, { use } from "react";
import { NavLink } from "react-router";
const categoryPromise = fetch(
  "https://fakestoreapi.com/products/categories",
).then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div className="text-center capitalize">
      <h1 className="text-3xl my-5 font-semibold">Our Products</h1>
      <div className="flex flex-wrap justify-center items-center gap-2 my-5">
        <NavLink
          end
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded-4xl border border-gray-300 bg-indigo-600 text-white capitalize"
              : "px-4 py-2 rounded-4xl border border-gray-300 text-gray-700 hover:text-indigo-600 transition-colors capitalize"
          }
        >
          All
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category}
            to={`/products/${category}`}
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 rounded-4xl border border-gray-300 bg-indigo-600 text-white capitalize"
                : "px-4 py-2 rounded-4xl border border-gray-300 text-gray-700 hover:text-indigo-600 transition-colors capitalize"
            }
          >
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
