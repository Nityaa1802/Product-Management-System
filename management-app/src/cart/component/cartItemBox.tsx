import React, { useEffect, useState } from "react";
import { product } from "../../types/product";
import { cartProduct } from "../../types/cartProduct";
import { singleProduct } from "../../api/request";

const CartItemBox = ({ productObj }: { productObj: cartProduct }) => {
  const [product, setProduct] = useState<product>();
  function getSingleProduct() {
    singleProduct(productObj.id).then((res) => {
      setProduct(res);
    });
  }
  useEffect(getSingleProduct, []);
  return (
    <>
      <div className="bg-white w-auto  m-3  grid grid-cols-6 grid-rows-3 p-3 shadow-md border border-gray-300 ">
        <img
          className="rounded-lg col-span-1 w-24 h-24 row-span-3"
          alt="product image"
          src={product?.thumbnail}
        />
        <div className="col-span-2 row-span-3">
          <h5 className="text-gray-600 text-sm">{product?.brand}</h5>
          <h3 className="font-bold text-md">{product?.title}</h3>
          <p className="text-gray-400">In stock</p>
        </div>
        <div className=" row-span-3">
          <p className="font-bold text-md">
            Each ₹ {productObj.discountedPrice}.00
          </p>
          <span className="m-4 text-red-500 font-large font-semibold">
            {product?.discountPercentage}%
          </span>
        </div>
        <div className="col-span-1 my-4  row-span-3">
          <span className="p-2 px-3 hover:shadow-inner bg-gray-200 rounded-s-full">
            -
          </span>
          <span className="p-2 px-3 bg-gray-200">{productObj.quantity}</span>
          <span className="p-2 px-3 hover:shadow-inner bg-gray-200 rounded-e-full">
            +
          </span>
        </div>
        <div className=" row-span-2">
          <p className="text-md font-semibold">Total</p>
          <p className="text-md font-semibold">{productObj.total}</p>
        </div>
        <div className="row row-span-1">
          <button className="text-red-500 ms-16 text-sm justify-self-end">
            remove
          </button>
        </div>
      </div>

      <hr className="mx-4 " />
    </>
  );
};

export default CartItemBox;
