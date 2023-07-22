import React from "react";
import Category from "./category";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";

const TableRows = ({ product }: any) => {
  return (
    <div className="  bg-white rounded-lg grid grid-cols-11 gap-4 mx-8 mb-4 p-2 shadow-lg border border-gray-300 items-center hover:bg-gray-100 hover:border-gray-400 rowsWidth">
      <div className="col-span-4 flex">
        <img
          src={product.thumbnail}
          alt="product image"
          className="h-14 w-14 mr-3 rounded-md"
        />
        <div className="mr-2">
          <h4 className=" font-medium text-gray-700">{product.title}</h4>
          <p className="text-xs text-gray-500 ">
            {product.description.substring(0, 61) + "..."}
          </p>
        </div>
      </div>

      <div className=" flex justify-start">
        <Category text={product.category} />
      </div>
      <div className="font-medium text-gray-700">{product.brand}</div>
      <div className="font-medium text-gray-700">₹ {product.price}</div>
      <div className=" text-red-500">{product.discountPercentage}%</div>
      
        <Ratings rating={product.rating} />
     
      <div className="col-span-2">
        <Link
          to={`/product/${product.id}`}
          className="button mr-3"
        >
          View Details
        </Link>
        <button className="button">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default TableRows;
