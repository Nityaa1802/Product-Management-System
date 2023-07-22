import React from "react";
import { usePagination } from "./usePagination";

const Pagination = (props: any) => {
  const currentPage = props.currentPage;
  const totalPages = Math.ceil(props.totalCount / props.pageSize);
  const pagesRange = usePagination({ totalPages, currentPage });

  if (totalPages < 2) {
    return <></>;
  }
  return (
    <div className="flex justify-center m-5 font-serif  text-3xl">
      <ul className="flex items-center">
        <li className="align-middle text-center ">
          <button
            disabled={currentPage === 1 ? true : false}
            onClick={() => {
              props.setSkip(props.currentPage - 1);
            }}
            className={"paginationButton"}
          >
            {"<"}
          </button>
        </li>
        {pagesRange.map((i: any) => {
          if (i === -1) {
            return (
              <li>
                <button
                  disabled={true}
                  className="text-xl text-gray-700 w-12 h-12  text-center m-1 align-middle disabled "
                >
                  ...
                </button>
              </li>
            );
          } else {
            return (
              <li className="align-middle text-center">
                <button
                  onClick={() => props.setSkip(i)}
                  className={
                    "text-xl text-gray-700 w-12 h-12 hover:border hover:shadow-sm  hover:border-gray-300 hover:bg-gray-200 hover:rounded-full align-middle hover:font-semibold  p-2 m-1 text-center" +
                    (props.currentPage === i? " rounded-full bg-gray-200 border border-gray-300 shadow-sm ": "")}>
                  {i}
                </button>
              </li>
            );
          }
        })}
        <li className="align-middle text-center">
          <button
            disabled={currentPage === totalPages ? true : false}
            onClick={() => {
              props.setSkip(props.currentPage + 1);
            }}
            className={"paginationButton"}>
            {">"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
