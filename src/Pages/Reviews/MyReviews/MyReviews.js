import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../ReviewCard';
import ReviewForm from '../ReviewForm';

const MyReviews = () => {
    const reviews= useLoaderData()
    console.log(reviews)

    return (
        <div className=''>

            <ReviewCard reviews={reviews}></ReviewCard>
            
        </div>
    );
};

export default MyReviews;