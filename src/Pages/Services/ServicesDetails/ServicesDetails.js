import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import ServicesDetailsSection from './ServicesDetailsSection';
import ServicesReviewsSection from './ServicesReviewsSection';

const ServicesDetails = () => {
    
    const service= useLoaderData()



    return (
        <div className='Container px-8 mx-auto my-16'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
            <ServicesDetailsSection service={service}></ServicesDetailsSection>
            <ServicesReviewsSection service={service} ></ServicesReviewsSection>
        </div>
        </div>
    );
};

export default ServicesDetails;