import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleProduct } from "../../api/request";
import { product } from "../../model/product";
import Ratings from "./Ratings";

const ProductDetails = () => {
  const param = useParams();
  const productId = param.productId;
  const [product, setProduct] = useState<product>();
  const [showImg, setShowImg] = useState<string>();

  function getSingleProduct() {
    if (productId != undefined) {
      singleProduct(parseInt(productId)).then((res) => {
        setProduct(res);
        setShowImg(product?.thumbnail);
      });
    }
  }

    useEffect(getSingleProduct, [productId]);
    
  return (
    <div className="grid grid-cols-2 m-5 ">
      <div className="col-span-1 w-auto m-5">
        <img src={product?.thumbnail} className=" my-5 rounded-xl w-full" />

        <div className="flex row gap-4 whitespace-nowrap overflow-x-auto scroll scroll-smooth">
          <img
            src={product?.thumbnail}
            alt="product images"
            className={
              "w-28 h-28 rounded-lg" +
              (showImg === product?.thumbnail
                ? "border border-blue-500 rounded-lg border-spacing-2"
                : "")
            }
            onClick={() => {
              setShowImg(product?.thumbnail);
            }}
          />

          {product?.images.map((img) => {
            return (
              <img
                src={img}
                alt="product images"
                className={
                  "w-28 h-28 rounded-lg" +
                  (showImg == img
                    ? "border border-blue-500 rounded-lg border-spacing-2"
                    : "")
                }
                onClick={() => {
                  setShowImg(img);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="col-span-1 m-10 ">
        <h5 className="text-gray-600 text-lg my-1">{product?.brand}</h5>
        <h3 className="font-bold text-2xl">{product?.title}</h3>
        <h6 className="text-gray-400 font-semibold my-0.5">
          {product?.description}
        </h6>
        <span>
          <Ratings rating={product?.rating} />
        </span>
        <span className="text-gray-500 font-medium">({product?.rating})</span>
        <hr className="my-5 bg-gray-400" />
        <span className="font-bold text-3xl">₹ {product?.price}.00</span>
        <span className="m-4 text-red-500 font-large font-semibold">
          {product?.discountPercentage}%
        </span>
        <p className="font-semibold text-gray-400">
          Suggested payments with 6 months special financing
        </p>
        <hr className="my-5 bg-gray-400" />
        <span className="p-2 px-3 hover:shadow-inner bg-gray-200 rounded-s-full">
          -
        </span>
        <span className="p-2 px-3 bg-gray-200">1</span>
        <span className="p-2 px-3 hover:shadow-inner bg-gray-200 rounded-e-full">
          +
        </span>
        <span className="text-gray-600 font-semibold mx-4">
          {" "}
          Hurry up! Only <span className="text-blue-600">
            {product?.stock}
          </span>{" "}
          left
        </span>
        <div className="flex gap-4 ">
          <button className="bg-black px-5 py-2 text-white hover:shadow-lg my-8  rounded-full">
            Buy Now
          </button>
          <button className="border-2 hover:shadow-lg border-black text-black px-3 py-1 font-semibold my-8 rounded-full">
            Add to Cart
          </button>
        </div>
        <hr className=" bg-gray-400 my-5" />
        <div className="bg-gray-100 text-sm font-medium text-gray-700 p-3 m-2 inline-block rounded-md">
          <>Free Delivery..</>
          <br />
          <>Enter your passcode</>
        </div>
        <div className="bg-gray-100 text-sm font-medium text-gray-700 p-3 m-2 inline-block rounded-md">
          <>Easy 30 Days return</>
          <br />
          <>Terms and conditions applied</>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
