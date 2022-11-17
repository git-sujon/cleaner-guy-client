import userEvent from "@testing-library/user-event";
import React, { useContext, useState , useEffect} from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import ReviewCard from "../../Reviews/ReviewCard";
import ReviewForm from "../../Reviews/ReviewForm";
import Sppiner from '../../Others/Sppiner'

const ServicesReviewsSection = ({service}) => {
  const { user } = useContext(AuthContext);
  const [allReviews, setAllReviews] = useState([])

  

  // loaded Reviews 
  useEffect(()=> {
    fetch(`https://cleaner-guy-server.vercel.app/allreviews`)
    .then(res => res.json())
    .then(data => {
      setAllReviews(data)
    })
  }, [service?._id])

  return (
    <div className="col-span-2 shadow">
      <div className="border border-gray-200 p-4">
        {user?.email ? (
          <ReviewForm service={service}></ReviewForm>
        ) : (
          <div className="text-center my-5">
            <p className="text-3xl font-semibold my-3">
              Please login to add a review
            </p>

            <Link
              to="/login"
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
        )}

       <div className="flex flex-col gap-y-5">
       {allReviews?.map((reviews) => (
          <ReviewCard key={reviews._id} reviews={reviews}></ReviewCard>
        ))}
       </div>
      </div>
    </div>
  );
};

export default ServicesReviewsSection;
