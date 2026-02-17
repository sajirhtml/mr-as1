import React from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const ProductCard = ({prod}) => {
  return (
    <div className="card w-80 bg-white shadow-xl border border-gray-100 rounded-2xl overflow-hidden font-sans">
      {/* Image Container with light gray background */}
      <figure className="bg-[#f0f2f5] p-8 h-64 flex items-center justify-center">
        <img
          src={prod.image}
          alt={prod.title}
          className="object-contain h-full w-full mix-blend-multiply"
        />
      </figure>

      <div className="card-body p-5 gap-3">
        {/* Category and Rating Row */}
        <div className="flex justify-between items-center">
          <span className="badge border-none bg-indigo-100 text-indigo-600 font-medium px-3 py-3 capitalize">
            {prod.category}
          </span>
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold text-gray-700">
              {prod.rating.rate}
            </span>
            <span>({prod.rating.count})</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 leading-tight">
          {prod.title}
        </h2>

        {/* Price */}
        <p className="text-2xl font-black text-gray-900">${prod.price}</p>

        {/* Actions */}
        <div className="card-actions grid grid-cols-2 gap-3 mt-2">
          <button className="btn btn-outline border-gray-300 hover:bg-gray-50 hover:text-gray-800 text-gray-600 capitalize font-semibold rounded-xl flex items-center gap-2">
            <AiOutlineEye className="text-xl" />
            Details
          </button>
          <button className="btn bg-[#5e50ee] hover:bg-[#4d41d1] text-white border-none capitalize font-semibold rounded-xl flex items-center gap-2">
            <AiOutlineShoppingCart className="text-xl" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
