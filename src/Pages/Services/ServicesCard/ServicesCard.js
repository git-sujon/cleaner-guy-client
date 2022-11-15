import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServicesCard = ({ servicesDetails }) => {
  const { title, img_card, _id, description_one, price, rating } =
    servicesDetails;
  return (
    <div className="w-full max-w-sm  rounded-lg shadow-md bg-green-900 ">
      <div className="relative overflow-hidden">
        <PhotoProvider>
          <PhotoView src={img_card}>
            <img
              className=" rounded-t-lg h-[350px] hover:scale-110 transition duration-300 ease-in-out"
              src={img_card}
              alt="Services"
            />
          </PhotoView>
        </PhotoProvider>
      </div>

      <div className="px-5 pb-5">
        <Link to={`/services/${_id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <StarIcon className="h-5 w-5 text-yellow-400" />

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating}
          </span>
        </div>
        <p className="text-white ">{description_one.slice(0, 75)}...</p>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Link
            to={`/services/${_id}`}
            className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
