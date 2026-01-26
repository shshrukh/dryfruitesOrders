import React from "react";
import Button from "./Button";

const Product = ({ item }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 hover:bg-gray-50 hover:shadow-sm hover:scale-105 transition-all duration-200">
      
      <div className="mb-3">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-40 object-contain"
        />
      </div>

      <h3 className="text-sm font-medium text-gray-800 mb-1">
        {item.title}
      </h3>

      <p className="text-xs text-gray-500 mb-3 leading-snug">
        {item.desc}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-800">
          ${item.price}
        </span>

        <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded">
          View details
        </button>
      </div>
    </div>
  );
};

export default Product;

