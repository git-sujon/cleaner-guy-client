import React, { useEffect, useState } from "react";

const Pagination = ({paginationInfo}) => {

const {
    page,
    setPage,
    setSize,
    pages,
   
} = paginationInfo








  return (
    <div className="">
  
  
      <div className="flex justify-center space-x-1 dark:text-gray-100">
        <button
        onClick={()=> page === 0 ? setPage(page-0) : setPage(page-1) }
          title="previous"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-700 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>


       


        {[...Array(pages).keys()].map((pageNumber) => (
       
       <button
       key={pageNumber}
       onClick={(event)=>setPage(pageNumber ) }
       type="button"
       title="Page 1"
       className={ page === pageNumber ? 'inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border  rounded  shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400' : 'inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-700 dark:border-gray-800'}
     >
       {pageNumber +1 }
     </button>
       
       ))}


 


        <button
        onClick={()=>setPage( pages > (page+1) && page+ 1) }
          title="next"
          type="button"
          className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-700 dark:border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* <div className="text-center mt-5">
  
        <select className="w-1/5 " onChange={(event)=> setSize(parseInt(event.target.value))} name="" id="">
            <option value="10">10</option>
            <option selected value="15">15</option>
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
      </div> */}




    </div>
  );
};

export default Pagination;
