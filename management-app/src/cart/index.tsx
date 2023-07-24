import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { UsersCart } from "../api/request";
import { user } from "../types/user";
import CartItemBox from "./component/cartItemBox";
import { cartProduct } from "../types/cartProduct";
import { cartDetails } from "../types/cartDetails";

const Cart = () => {
  const navigate = useNavigate();
  const userObj: user = useContext(UserContext);
  if (userObj.email === undefined) {
    navigate("/login");
  }
  const [cartItem, setCartItem] = useState<cartProduct[]>([]);
  const [cartDetails, setCartDetails] = useState<cartDetails>(
    {} as cartDetails
  );
  function getCartByUser() {
    if (userObj.email !== undefined) {
      UsersCart(userObj.id).then((res) => {
        setCartItem(res.products);
        setCartDetails(res);
      });
    }
  }
  console.log(cartDetails);
  useEffect(getCartByUser, []);
  return (
    <div className="flex flex-wrap  m-7 justify-around">
      <div className="xl:w-2/3 w-full">
        <h2 className="font-serif text-3xl my-2 font-semibold text-gray-500">
          {" "}
          No. of Products :{cartDetails.totalProducts}
        </h2>
        {cartItem.map((product: cartProduct) => {
          return (
            <>
              <CartItemBox key={product.id} productObj={product} />
            </>
          );
        })}
      </div>

      <div className="bg-white my-12 xl:w-96 inline-block p-4 py-10 h-96 shadow-lg border border-gray-300">
        <div className="flex m-2 justify-between">
          <div className="text-gray-600 text-lg font-medium">
            <p className="m-2">Total Products:</p>
            <p className="m-2">Delivery Charges:</p>
            <p className="m-2">Tax:</p>
          </div>
          <div className="text-gray-600 text-lg font-medium">
            <p className="m-2">{cartDetails.totalQuantity}</p>
            <p className="m-2 text-red-500">free delivery</p>
            <p className="m-2">12%</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between m-3">
          <span className="text-gray-600 text-lg font-medium">Total: </span>
          <span className="font-bold text-2xl">
            ₹ {cartDetails.discountedTotal}.00
          </span>
        </div>
        <hr />
        <button className="bg-blue-700 w-64 py-0.5 h-10 text-2xl mx-10  text-white shadow-lg my-10  rounded-full">
          Buy Now{" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
