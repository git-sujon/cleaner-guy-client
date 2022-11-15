import React from "react";
import UseTitle from "../../../Hooks/UseTitle";
import ServicesReviews from "../../Others/ServicesReviews";

const ServicesDetailsSection = ({ service }) => {
  const { title, img_card, _id, description_one, price, rating } = service;
  UseTitle(`${title}`)

  return (
    <div className="col-span-3 shadow">
      <div className="border border-gray-200 p-4">
        <img src={img_card} alt="" />
        <div className="my-4">
          {/* Title & Services Price */}
          <div className="flex items-center justify-between text-green-700 ">
            <h1 className="text-3xl font-bold my-4">{title}</h1>
            <p className="text-3xl font-bold">
              <span className=" ">${price}</span>
            </p>
          </div>

          {/* Services Description  */}
          <p className="text-justify">{description_one}</p>
          <p className="my-5 text-justify">
            Cleaning can be a chore and we know you have many choices when you
            consider hiring a maid service. Because of that, we are constantly
            thriving to improve our already high standards to have you see us as
            the absolute best in the industry. It’s not enough to have trust in
            the cleaning crew that you let into your home… you also have to
            trust that they will perform a first-class cleaning job for you.
            Putting our employees through a rigorous training program ensures
            each member of our cleaning team understands their role and how it
            relates to the overall performance of the team.
          </p>

          {/*services Reviews and Ranting  */}
          <div className="flex items-center justify-center">
            <p className="text-6xl text-green-900 mb-0 font-bold">{rating}<span className="text-stone-700">/</span><span className="text-stone-500 text-5xl">5</span> </p>
            <ServicesReviews></ServicesReviews>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailsSection;
