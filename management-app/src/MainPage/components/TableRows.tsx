import React from 'react'
import Category from './category'
import Ratings from './Ratings'

const TableRows = ({product}:any) => {
  return (
    <div className=' bg-white rounded-lg grid grid-cols-12 gap-4 mx-8 mb-4 p-2 shadow-lg border border-gray-300 items-center hover:bg-gray-100 hover:border-gray-400'>
          <div className='col-span-4 flex'>
        <img src={ product.thumbnail} alt="" className='h-14 w-14 mr-3 rounded-md' />
              <div className='mr-2'>
          <h4 className=' font-medium text-gray-700'>{ product.title}</h4>
          <p className='text-xs text-gray-500 '>{ product.description.substring(0,81)+'...'}</p>
              </div>
          </div>
          
          <div className=' flex justify-start'>
        <Category text={product.category } />
        </div>
        <div className='font-medium text-gray-700'>
          {product.brand}
        </div>
        <div className='font-medium text-gray-700'>
          ₹ {product.price}
        </div>
        <div className=' text-red-500'>
          {product.discountPercentage}%
        </div>
        <div className='col-span-2'>
          <Ratings/>
        </div>
        <div className='col-span-2'>
              <button className='bg-white border border-blue-600 text-blue-600 px-2 py-1 rounded-lg text-sm tracking-wide hover:bg-blue-500 hover:text-white font-semibold mr-3'>View Details</button>
              <button className='bg-white border border-blue-600 text-blue-600 px-2 py-1 rounded-lg text-sm tracking-wide hover:bg-blue-500 hover:text-white font-semibold'>Add to cart</button>
        </div>
      </div>
  )
}

export default TableRows