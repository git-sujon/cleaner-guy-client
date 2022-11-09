import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import ReviewDeleteModal from "../../Others/ReviewDeleteModal";
import ReviewCard from "../ReviewCard";

const MyReviews = () => {
  const loadedReviews = useLoaderData();

  const [allReviews, setAllReviews] = useState(loadedReviews);

    
  
  const deleteReviewsHandler = (review) => {
    fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "DELETE",
     
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount > 0) {
            toast.success("Review Deleted Successfully")
            
            const remainingReviews= allReviews.filter(SingleReview => SingleReview._id !== review._id)
            setAllReviews(remainingReviews)


        }
        
      })
      .catch((err) => console.log(err));
  };

  const updateReviewsHandler = (review) => {
    fetch(`http://localhost:5000/reviews/${review._id}`);
  };

  return (
    <div className="container px-4 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {allReviews.map((reviews) => (
        <ReviewCard 
        deleteReviewsHandler={deleteReviewsHandler} 
        key={reviews._id} 
        reviews={reviews}></ReviewCard>
      ))}

      {/* <ReviewDeleteModal></ReviewDeleteModal> */}
    </div>

  );
};

export default MyReviews;
