import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import UseTitle from '../../Hooks/UseTitle';

const UpdateReviews = () => {
  UseTitle('Update Reviews')
    const reviews = useLoaderData()
    // console.log(reviews)

    const navigate = useNavigate()

    const { user } = useContext(AuthContext);
    const [ratingsValue, setRatingsValue] = useState(reviews.rating);

    const [ratingColor, setRatingColor] = useState("");
  
    const getRatingsId = (event) => {
      setRatingsValue(event.currentTarget.id);
      setRatingColor("text-yellow-400");
    };
  
    const updateReviewsHandler = (event) => {
      event.preventDefault();
      const form = event.target;
      const reviewText = form.reviewText.value;
  
      const review = {
        reviewText,
        rating: ratingsValue,
        userEmail: user?.email,
        userName: user?.displayName,
        userPhoto: user?.photoURL,
        reviewPhoto: "",
      };
  
      if(ratingsValue === "") {
        return toast.error("Please Give a Rating")
      }
  

          fetch(`https://cleaner-guy-server.vercel.app/reviews/${reviews._id}`, {
        method: "Put",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
  
      
          if (data.modifiedCount > 0) {
            switch (ratingsValue) {
              case "1":
                toast.success("Why One Star? 🤬");
                break;
              case "2":
                toast.success("Really Only Two Star? 😖");
                break;
              case "3":
                toast.success("What Wrong!!! 😦");
                break;
              case "4":
                toast.success("That's okk 🙂");
                break;
              case "5":
                toast.success("Thank you 😘😘😘");
                break;
              default:
                
            }
            navigate('/myReviews')
            setRatingsValue("");
          }
        })
        .catch((err) => console.error(err));
    };



    return (
        <div>
            <h1 className='text-center text-5xl text-green-600 font-bold'>Update Your Review</h1>
        <div className="container mx-auto flex flex-col my-5 max-w-md p-4 shadow-sm rounded-xl lg:p-6 dark:bg-green-100 dark:text-black">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">
              Your opinion matters!
            </h2>
            <div className="flex flex-col items-center py-3 space-y-2">
              <span className="text-center">How was your experience?</span>
              <div className="flex space-x-3">
                <button
                  type="button"
                  id="1"
                  title="Rate 1 stars"
                  onClick={getRatingsId}
                  aria-label="Rate 1 stars"
                  value="w"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-10 h-10  hover:text-yellow-400 ${
                      ratingsValue === "1" ? "text-yellow-400" : "text-gray-600"
                    } `}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  id="2"
                  title="Rate 2 stars"
                  onClick={getRatingsId}
                  aria-label="Rate 2 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-10 h-10  hover:text-yellow-400 ${
                      ratingsValue === "2" ? "text-yellow-400" : "text-gray-600"
                    } `}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  id="3"
                  title="Rate 3 stars"
                  onClick={getRatingsId}
                  aria-label="Rate 3 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-10 h-10  hover:text-yellow-400 ${
                      ratingsValue === "3" ? "text-yellow-400" : "text-gray-600"
                    } `}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  id="4"
                  title="Rate 4 stars"
                  onClick={getRatingsId}
                  aria-label="Rate 4 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-10 h-10  hover:text-yellow-400 ${
                      ratingsValue === "4" ? "text-yellow-400" : "text-gray-600"
                    } `}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  id="5"
                  title="Rate 5 stars"
                  onClick={getRatingsId}
                  aria-label="Rate 5 stars"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`w-10 h-10  hover:text-yellow-400 ${
                      ratingsValue === "5" ? "text-yellow-400" : "text-gray-600"
                    } `}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <form onSubmit={updateReviewsHandler} className="flex flex-col w-full">
              <textarea
                rows="3"
                name="reviewText"
                required
                defaultValue={reviews?.reviewText}
                placeholder="Message..."
                className="p-4 border border-stone-700 rounded-md resize-none dark:text-black dark:bg-green-100"
              ></textarea>
              <button
                type="submit"
                id="1"
                className="py-3 my-4 font-semibold rounded-md dark:text-gray-900 dark:bg-green-600 hover:bg-green-800"
              >
                Leave feedback
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateReviews;