import React from 'react';

const ServicesDetailsSection = ({service}) => {

    const { title, img_card, _id, description_one, price, rating } =
    service;

    return (
        <div className='col-span-3 shadow'>
            <div className='border border-gray-200 p-4'>
            <img src={img_card } alt="" />
            <div className='my-4'>
                <h1 className='text-green-700 text-3xl font-bold my-4'>{title}</h1>
                <p>{description_one}</p>
                <p className='my-5'>Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve our already high standards to have you see us as the absolute best in the industry. It’s not enough to have trust in the cleaning crew that you let into your home… you also have to trust that they will perform a first-class cleaning job for you. Putting our employees through a rigorous training program ensures each member of our cleaning team understands their role and how it relates to the overall performance of the team.</p>
                <div className='flex '>
                    <p>{price}</p>
                    <p>{rating}</p>
                </div>
            </div>

            </div>
        </div>
    );
};

export default ServicesDetailsSection;