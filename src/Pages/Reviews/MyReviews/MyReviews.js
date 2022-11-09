import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../ReviewCard';


const MyReviews = () => {
    const allReviews= useLoaderData()
    // console.log(reviews)

    return (
        <div className='container px-4 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                allReviews.map(reviews=>  <ReviewCard key={reviews._id} reviews={reviews}></ReviewCard>)
            }

          
            
        </div>
    );
};

export default MyReviews;