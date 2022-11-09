import React from "react";
import { StarIcon } from '@heroicons/react/24/solid'

const ServicesReviews = () => {
  return (
    <div>
      {/* <!-- review item --> */}
      <div class="mx-auto bg-white  px-4 py-4 max-w-sm ">
        <div class="mb-1 tracking-wide px-4 py-4">
          <h2 class="text-gray-800 font-semibold mt-1">67 Users reviews</h2>
          <div class="flex flex-col justify-between -mx-8 px-8 pb-3">
            
              {/* <!-- first --> */}
            <div class="flex items-center justify-between mt-1">
              <div class="  text-green-500 flex w-36 tracking-tighter">
                <span><StarIcon className="w-4"/></span>
                <span><StarIcon className="w-4"/></span>
                <span><StarIcon className="w-4"/></span>
                <span><StarIcon className="w-4"/></span>
                <span><StarIcon className="w-4"/></span>
              </div>
              <div class="w-3/5">
                <div class="bg-gray-300  ml-2 w-full rounded-lg h-2">
                  <div class=" w-7/12 bg-green-600 rounded-lg h-2"></div>
                </div>
              </div>
              <div class="w-1/5 text-gray-700 pl-3">
                <span class="text-sm">51%</span>
              </div>
            </div>

            
              {/* <!-- Second --> */}
            <div class="flex items-center justify-between mt-1">
              <div class="  text-green-500 flex w-36 tracking-tighter">
                <span><StarIcon className="w-4"/></span>
                <span><StarIcon className="w-4"/></span>
                <span><StarIcon className="w-4"/></span>
                <span><StarIcon className="w-4"/></span>
           
              </div>
              <div class="w-3/5">
                <div class="bg-gray-300  ml-2 w-full rounded-lg h-2">
                  <div class=" w-3/5 bg-green-600 rounded-lg h-2"></div>
                </div>
              </div>
              <div class="w-1/5 text-gray-700 pl-3">
                <span class="text-sm">27%</span>
              </div>
            </div>

            
              {/* <!-- third --> */}
            <div class="flex items-center justify-between mt-1">
              <div class="  text-green-500 flex w-36 tracking-tighter">
                <span><StarIcon className="w-4"/></span>
                <span><StarIcon className="w-4"/></span>
                <span><StarIcon className="w-4"/></span>
              
           
              </div>
              <div class="w-3/5">
                <div class="bg-gray-300  ml-2 w-full rounded-lg h-2">
                  <div class=" w-2/5 bg-green-600 rounded-lg h-2"></div>
                </div>
              </div>
              <div class="w-1/6 text-gray-700 pl-3">
                <span class="text-sm">13%</span>
              </div>
            </div>

            
            
              {/* <!-- 4th --> */}
            <div class="flex items-center justify-between mt-1">
              <div class="  text-green-500 flex w-36 tracking-tighter">
                <span><StarIcon className="w-4"/></span>
                <span><StarIcon className="w-4"/></span>
   
              
           
              </div>
              <div class="w-3/5">
                <div class="bg-gray-300  ml-2 w-full rounded-lg h-2">
                  <div class=" w-2/6 bg-green-600 rounded-lg h-2"></div>
                </div>
              </div>
              <div class="w-1/5 text-gray-700 pl-3">
                <span class="text-sm">7%.</span>
              </div>
            </div>

            
            
              {/* <!-- 5th --> */}
            <div class="flex items-center justify-between mt-1">
              <div class="  text-green-500 flex w-36 tracking-tighter">
                <span><StarIcon className="w-4"/></span>
           
              </div>
              <div class="w-3/5">
                <div class="bg-gray-300  ml-2 w-full rounded-lg h-2">
                  <div class=" w-2/6 bg-green-600 rounded-lg h-2"></div>
                </div>
              </div>
              <div class="w-1/5 text-gray-700 pl-3">
                <span class="text-sm">2%.</span>
              </div>
            </div>

            






          </div>
        </div>

        {/* reviews Footer  */}

        {/* <div class="w-full px-4">
          <h3 class="font-medium tracking-tight">Review this item</h3>
          <p class="text-gray-700 text-sm py-1">
            give your opinion about this item.
          </p>
          <button class="bg-gray-100 border border-gray-400 px-3 py-1 rounded  text-gray-800 mt-2">
            write a review
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesReviews;
