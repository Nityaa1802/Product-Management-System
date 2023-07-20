import React from 'react'

const Category = (props:any) => {
  return (
   <p className=' inline text-center bg-gray-200 text-gray-900 font-thin  border border-gray-300 rounded-md  p-1 text-xs'>{ props.text}</p>
  )
}

export default Category