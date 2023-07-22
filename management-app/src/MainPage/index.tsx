import React, { useEffect, useState } from "react";
import TableRows from "./components/TableRows";
import Pagination from "../Utils/Pagination";
import axios from "axios";
import { error, log } from "console";
import { product } from "../model/product";
import {
  categories,
  paginatedProducts,
  productsByCategory,
} from "../api/request";

const Mainpage = () => {
  window.scroll(0, 0);
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(1);
  const [allProducts, setAllProducts] = useState<product[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const headers=[{"name":'Product Details',"span":4},{"name":'Category',"span":1},
  {"name":'Brand',"span":1},{"name":'Price',"span":1},{"name":'Discount',"span":1},{"name":'Rating',"span":1},
  {"name":'Action',"span":2}]
  const [categoriesArr, setCategoriesArr] = useState<string[]>([]);

  function getProductsFromReq() {
    paginatedProducts(limit, (skip - 1) * limit).then((data) => {
      setAllProducts(data.products);
      setTotalCount(data.total);
    });
  }

  function getCategoriesFromReq() {
    categories().then((data) => {
      setCategoriesArr(data);
    });
  }

  function getProductsByCategoryFromReq() {
    if (category !== "") {
      productsByCategory(category, limit, (skip - 1) * limit).then((data) => {
        console.log(data);
        setAllProducts(data.products);
        setTotalCount(data.total);
      });
    }
  }

  useEffect(getProductsFromReq, [limit, skip]);
  useEffect(getCategoriesFromReq, []);
  useEffect(getProductsByCategoryFromReq, [category, limit, skip]);

  return (
    <>
      <div className="flex justify-between mx-5 my-1">
        <h1 className="m-5 font-thin font-serif text-xl sm:text-2xl md:text3xl text-gray-600 inline">
          Products
        </h1>
        <div className="mx-5 md:mx-10 my-3  flex items-center ">
          <select
            id="limit"
            onChange={(e) => {
              setLimit(parseInt(e.target.value, 10));
            }}
            className="selector"
          >
            <option defaultValue={"5"}>5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="25">25</option>
          </select>

          <select
            id="categories"
            onChange={(e) => {
              setSearch("");
              setCategory(e.target.value);
            }}
            className="selector"
          >
            <option defaultValue={""}>select a category</option>
            {categoriesArr.map((categoryI) => {
              return <option value={categoryI}>{categoryI}</option>;
            })}
          </select>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full px-3 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </div>
      </div>
      <div className=" flex ">
        <div className="overflow-x-auto scroll scroll-smooth w-full whitespace-nowrap md:mx-5 ">
          <div className="grid gap-4 mx-8 p-4 grid-cols-11 rowsWidth">
            {headers.map((header) => { return (<div className={`col-span-${header.span} tableHeader `}>{ header.name}</div>)})}           
          </div>
          {allProducts.map((product) => (
            <TableRows key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={skip}
        totalCount={totalCount}
        pageSize={limit}
        setSkip={setSkip}
      />
    </>
  );
};

export default Mainpage;
