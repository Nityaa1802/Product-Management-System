import React from 'react'
import TableRows from './components/TableRows'

const Mainpage = () => {
  return (
    <div className=' w-full h-full '>
      <h1 className='m-10 font-thin font-serif text-3xl text-gray-600 inline   '>Products</h1>
      <div className='flex justify-between mx-5 my-1'>
      <div  className='mx-5 md:mx-10 my-3  flex '>
        

        <select id="offset"
          className= "bg-white border border-gray-300 text-gray-700  text-sm rounded-lg hover:shadow-inner focus:shadow-inner focus:ring-blue-500 focus:border-blue-500 block  p-1 px-2 dark:border-gray-300 shadow-sm  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-5 font-semibold">
  <option selected>5</option>
  <option value="10">10</option>
  <option value="15">15</option>
          <option value="25">25</option>
          </select>
          <div className='flex'>
            <button  className= "bg-white border border-gray-300 text-gray-700  text-sm  rounded-s-lg p-1 px-2 hover:font-semibold  shadow-sm hover:shadow-inner ">
            { '<<'}
          </button>
          <button  className= "bg-white border border-gray-300 text-gray-700  text-sm  p-1 px-2  shadow-sm hover:font-semibold hover:shadow-inner ">
            { '<'}
            </button>
        <div className= "bg-white border border-gray-300 text-gray-700  text-sm g p-2 px-4 shadow-sm  font-semibold">5</div>
            <button  className= "bg-white border border-gray-300 text-gray-700  text-sm  p-1 px-2   shadow-sm hover:font-semibold hover:shadow-inner ">
           {'>'}
          </button>
          <button  className= "bg-white border border-gray-300 text-gray-700 rounded-e-lg text-sm  p-1 px-2  shadow-sm hover:font-semibold hover:shadow-inner ">
           {'>>'}
            </button>
          </div>  


        </div>
        <div className='flex items-center mx-5 md:mx-10 my-3 '>
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
      <div className='grid gap-2 mx-8 p-4 grid-cols-12'>
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
  { [1,2,3,4,5,6,7,8,9].map((i)=> <TableRows key={i}/>)}
    </div>
  )
}

export default Mainpage