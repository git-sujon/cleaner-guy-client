import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import UseTitle from "../../../Hooks/UseTitle";

import ReviewDeleteModal from "../../Others/ReviewDeleteModal";
import Sppiner from "../../Others/Sppiner";
import WellComeing from "../../Others/WellComeing";
import ReviewCard from "../ReviewCard";

const MyReviews = () => {
  UseTitle("My Reviews");
  const loadedReviews = useLoaderData();
  const { user, logOut } = useContext(AuthContext);

  const [allReviews, setAllReviews] = useState([]);

  // const [hidden, setHidden] = useState(false)
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    fetch(`https://cleaner-guy-server.vercel.app/reviews?userEmail=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("CleanerGuy")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        <Sppiner></Sppiner>;
        return res.json();
      })
      .then((data) => {
        setAllReviews(data);
      });
  }, [user?.email, logOut]);

  const deleteReviewsHandler = (review) => {
    // setHidden(true)

    // if(isDelete) {
    fetch(`https://cleaner-guy-server.vercel.app/reviews/${review._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Review Deleted Successfully");
          const remainingReviews = allReviews.filter(
            (SingleReview) => SingleReview._id !== review._id
          );
          setAllReviews(remainingReviews);
        }
        // setIsDelete(!isDelete)
      });

    // }
  };

  return (
    <div>
      <WellComeing></WellComeing>
      <h1 className="text-5xl text-center pt-5 font-bold text-emerald-700">
        Your Reviews
      </h1>

      {allReviews.length === 0 && (
        <div className="flex items-center justify-center ">
          <p className="text-2xl lg:text-5xl font-bold text-yellow-400">
            'No reviews were added '
          </p>
        </div>
      )}
      <div className="container px-4 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allReviews.map((reviews) => (
          <ReviewCard
            deleteReviewsHandler={deleteReviewsHandler}
            key={reviews._id}
            reviews={reviews}
          ></ReviewCard>
        ))}

        {/* <div onClick={()=>setHidden(!hidden)}>
        {
          hidden && <ReviewDeleteModal setIsDelete = {setIsDelete}></ReviewDeleteModal>
        }
      </div> */}
      </div>
    </div>
  );
};

export default MyReviews;
