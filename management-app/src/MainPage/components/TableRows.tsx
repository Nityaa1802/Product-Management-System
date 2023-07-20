import React from 'react'
import Category from './category'
import Ratings from './Ratings'

const TableRows = () => {
  return (
    <div className=' bg-white rounded-lg grid grid-cols-12 gap-2 mx-8 mb-4 p-2 shadow-md border border-gray-300 items-center hover:bg-gray-100 hover:border-gray-400'>
          <div className='col-span-4 flex'>
              <img src="https://images.pexels.com/photos/14260624/pexels-photo-14260624.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='h-14 w-14 mr-3 rounded-md' />
              <div className=''>
              <h4 className=' font-medium text-gray-700'>i phone</h4>
              <p className='text-xs text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, totam.</p>
              </div>
          </div>
          
          <div className=' flex justify-start'>
           <Category text='phone'/>
        </div>
        <div className='font-medium text-gray-700'>
          Apple
        </div>
        <div className='font-medium text-gray-700'>
          ₹15000.00
        </div>
        <div className=' text-red-500'>
          10%
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