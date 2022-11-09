import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import ReviewCard from "../Reviews/ReviewCard";
import ReviewForm from "../Reviews/ReviewForm";

const ServicesReviewsSection = () => {

    const {user} = useContext(AuthContext) 

  return (
    <div className="col-span-2 shadow">
      <div className="border border-gray-200 p-4">
        {
            user?.email ?      <ReviewForm></ReviewForm> :      <div className="text-center my-5">
            <p className="text-3xl font-semibold my-3">Please login to add a review</p>
  
              <Link to='/login'
                className="group relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-500"
                href="/download"
              >
                <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
  
                <span className="text-sm font-medium transition-all group-hover:ml-4">
                  Login
                </span>
              </Link>
   
          </div>
        }

   
   
        <ReviewCard></ReviewCard>
      </div>
    </div>
  );
};

export default ServicesReviewsSection;
