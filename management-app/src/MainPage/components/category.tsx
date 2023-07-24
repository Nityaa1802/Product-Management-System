import React from "react";

const Category = ({text}:{text:string}) => {
  return (
    <p className=" inline text-center bg-gray-200 text-gray-900 font-thin  border border-gray-300 rounded-md  p-1 text-xs">
      {text}
    </p>
  );
};

export default Category;
