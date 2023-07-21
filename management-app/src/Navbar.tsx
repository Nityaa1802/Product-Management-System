import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black md:h-16 h-12 w-full flex justify-between items-center md:px-12  p-4 mb-4">
        <h1 className="text-white md:text-2xl text font-serif font-bold text-sm bg-black">
          Welcome User!
        </h1>
      
          

        <div className="flex items-center overflow-hidden bg-black ">
        <i className="fa fa-star text-lg text-white"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white md:w-8 md:h-8 m-3 md:mx-5 inline-block w-6 h-6 cursor-pointer bg-black "
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <button className="md:px-3 md:py-1 p-1 px-2 text-white border border-2 rounded-xl my-auto border-white md:tracking-wide  uppercase text-xs tracking-tight">
              Sign In
            </button>
          </div>
      
      </nav>
    </>
  );
};

export default Navbar;
