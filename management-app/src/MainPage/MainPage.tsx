import React, { useEffect, useState } from 'react'
import TableRows from './components/TableRows'
import Pagination from '../Utils/Pagination';
import axios from 'axios';
import { log } from 'console';

const Mainpage = () => {
  window.scroll(0, 0);
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip-1*limit}`).then((res: any) => {
      console.log(res)
      setAllProducts(res.data.products)
      setTotalCount(res.data.total)
    }).catch((err) => (console.log(err)))
  
    
  },[limit,skip])

  
  return (
    <div className=' w-full h-full '>

      <div className='flex justify-between mx-5 my-1'>
      <h1 className='m-5 font-thin font-serif text-3xl text-gray-600 inline   '>Products</h1>
      <div  className='mx-5 md:mx-10 my-3  flex items-center '>
        

        <select id="limit" onChange={(e)=>{setLimit(parseInt(e.target.value, 10))}}
          className= "bg-white border p-2 border-gray-300 text-gray-700  text-sm rounded-lg hover:shadow-inner focus:shadow-inner focus:ring-blue-500 focus:border-blue-500 block   px-3 dark:border-gray-300 shadow-sm  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-3 ">
  <option selected>5</option>
  <option value="10">10</option>
  <option value="15">15</option>
          <option value="25">25</option>
          </select>



       

        <select id="categories"
          className= "bg-white border border-gray-300 text-gray-700  text-sm rounded-lg hover:shadow-inner focus:shadow-inner focus:ring-blue-500 focus:border-blue-500 block   px-3 dark:border-gray-300 shadow-sm  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5  p-2">
  <option selected>select a category</option>
  <option value="10">10</option>
  <option value="15">15</option>
          <option value="25">25</option>
          </select>
          <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" className="block w-full px-3 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
       
    </div>
        </div>
      </div>
      <div className='grid gap-4 mx-8 p-4 grid-cols-12'>
        <div className='col-span-4 tableHeader
       
        '>
          Product Details
        </div>
        <div className=' tableHeader'>
          Category
        </div>
        <div className=' tableHeader'>
          Brand
        </div>
        <div className=' tableHeader'>
          Price
        </div>
        <div className=' tableHeader'>
          Discount
        </div>
        <div className='col-span-2 tableHeader'>
          Rating
        </div>
        <div className='col-span-2 tableHeader'>
          Action
        </div>
        
      </div>
      {allProducts.map((product) => <TableRows key={product} product={product} />)}
      <Pagination currentPage={skip} totalCount={totalCount} pageSize={limit} setSkip={setSkip} />
    </div>
  )
}

export default Mainpage