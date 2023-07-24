import React from "react";
import Category from "./category";
import Ratings from "./Ratings";
import { Link } from "react-router-dom";
import { product } from "../../types/product";


const TableRows = ({Product}:{Product:product}) => {
  return (
    <div className="  bg-white rounded-lg grid grid-cols-11 gap-4 mx-8 mb-4 p-2 shadow-lg border border-gray-300 items-center hover:bg-gray-100 hover:border-gray-400 rowsWidth">
      <div className="col-span-4 flex">
        <img
          src={Product.thumbnail}
          alt="product image"
          className="h-14 w-14 mr-3 rounded-md"
        />
        <div className="mr-2">
          <h4 className=" font-medium text-gray-700">{Product.title}</h4>
          <p className="text-xs text-gray-500 ">
            {Product.description.substring(0, 61) + "..."}
          </p>
        </div>
      </div>

      <div className=" flex justify-start">
        <Category text={Product.category}  />
      </div>
      <div className="font-medium text-gray-700">{Product.brand}</div>
      <div className="font-medium text-gray-700">₹ {Product.price}</div>
      <div className=" text-red-500">{Product.discountPercentage}%</div>
      
        <Ratings ratings={Product.rating} />
     
      <div className="col-span-2">
        <Link
          to={`/product/${Product.id}`}
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
