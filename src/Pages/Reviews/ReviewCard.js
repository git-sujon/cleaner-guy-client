import { PencilSquareIcon, StarIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const ReviewCard = ({reviews, deleteReviewsHandler}) => {
const {user} = useContext(AuthContext)



  const {_id, reviewText, rating, userEmail, userName, userPhoto, reviewPhoto, Timestamp, service}= reviews
  
  const dateTime= new Date(Timestamp)

  const dividingTime= dateTime?.toLocaleString()?.split(':')
  const showingTime = dividingTime[0] + ':'+dividingTime[1]+ ' ' + dividingTime[2].slice(-2)

  

  
  

  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg p-3 mx-auto divide-y rounded-md divide-gray-700 dark:bg-emerald-800 dark:text-white">
        <div className="flex justify-between p-2">
          <div className="flex space-x-4">
            <div>
            <PhotoProvider>
            <PhotoView src={userPhoto}>
              <img
             className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                src={userPhoto}
                alt="reload"
              />
            </PhotoView>
          </PhotoProvider>
            </div>
            <div>
              <h4 className="font-bold">{userName}</h4>
              <span className="text-xs dark:text-white">{showingTime}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
           <StarIcon className="w-6"></StarIcon>
            <span className="text-xl font-bold">{rating}.0</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-white">
          <p>Services Name: {service?.title}</p>
          <p>
           Reviews: {reviewText}
          </p>
        
        </div>
        {/* buttons  */}
    {
      user?.email && 
      <div className="flex justify-end">
      {/* Delete Button  */}
      <div className="mr-5 ">
      <TrashIcon onClick={()=>deleteReviewsHandler(reviews)} className="w-6 text-red-400 hover:text-red-700 hover:border-2"></TrashIcon>
      </div>
      {/* Update Button  */}
      <div>
        <Link to={`/myReviews/${_id}`} ><PencilSquareIcon className="w-6 text-amber-300 hover:text-amber-500 hover:border-2"></PencilSquareIcon></Link>
      </div>
    </div>
    }
      </div>
    </div>
  );
};

export default ReviewCard;
