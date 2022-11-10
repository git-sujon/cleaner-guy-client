import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import ReviewDeleteModal from "../../Others/ReviewDeleteModal";
import ReviewCard from "../ReviewCard";

const MyReviews = () => {
  const loadedReviews = useLoaderData();
  const {user} = useContext(AuthContext)

  const [allReviews, setAllReviews] = useState([]);
  console.log(allReviews)

  // const [hidden, setHidden] = useState(false)
  const [isDelete, setIsDelete] = useState(false)


useEffect(()=> {
  fetch(`http://localhost:5000/reviews?userEmail=${user?.email}`)
  .then(res => res.json())
  .then(data =>{
    console.log(data)
    setAllReviews(data)
  })

}, [user?.email])
  


  const deleteReviewsHandler = (review) => {
    // setHidden(true)
    
    // if(isDelete) {
      fetch(`http://localhost:5000/reviews/${review._id}`, {
      method: "DELETE",
     
    })
      .then((res) => res.json())
      .then((data) => {
      
        if(data.deletedCount > 0) {
            toast.success("Review Deleted Successfully")
            const remainingReviews= allReviews.filter(SingleReview => SingleReview._id !== review._id)
            setAllReviews(remainingReviews)
            console.log(isDelete)
            
        }
        // setIsDelete(!isDelete)
      })
   
    // }
  };



  return (
   <div>
          <h1 className="text-5xl text-center pt-5 font-bold text-emerald-700">Your Reviews</h1>
          
    {
           allReviews.length === 0 && <div className="flex items-center justify-center "><p className="text-2xl lg:text-5xl font-bold text-yellow-400">'No reviews were added '</p></div>
      }
     <div className="container px-4 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      {allReviews.map((reviews) => (
        <ReviewCard 
        deleteReviewsHandler={deleteReviewsHandler} 
        key={reviews._id} 
        reviews={reviews}></ReviewCard>
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
