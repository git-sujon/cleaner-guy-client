import { StarIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hooks/UseTitle";

const AddMyservices = () => {
  UseTitle("Add Services");
  const { user } = useContext(AuthContext);
  const [watchServices, setWatchServices] = useState();


  const [rating, setRating] = useState(5);
  const navigate = useNavigate();

  const addServicesHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.servicesPrice.value;
    const img_card = form.imgUrl.value;
    const description_one = form.description.value;
    // console.log(title, price, img_card, description_one,rating)

    const services = {
      title,
      rating,
      img_card,
      price,
      description_one,
    };

    
    fetch(`https://cleaner-guy-server.vercel.app/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/services");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section className="bg-gray-100">
        <h1 className="text-5xl text-center pt-5 font-bold text-emerald-700">
          ADD A Services
        </h1>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            {/* Live ShowCase  */}

            <div className="w-full max-w-sm  rounded-lg shadow-md lg:col-span-2 bg-green-900">
              <PhotoProvider>
                <PhotoView src="https://www.hourmaid.com/wp-content/uploads/2017/12/cleaning-services-1024x682.jpeg">
                  <img
                    className=" rounded-t-lg h-[350px]"
                    src="https://www.hourmaid.com/wp-content/uploads/2017/12/cleaning-services-1024x682.jpeg"
                    alt="Services"
                  />
                </PhotoView>
              </PhotoProvider>

              <div className="px-5 pb-5">
                <Link to="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Home Cleaning
                  </h5>
                </Link>
                <div className="flex items-center mt-2.5 mb-5">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <StarIcon className="h-5 w-5 text-yellow-400" />

                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    {rating}
                  </span>
                </div>
                {/* <p className="text-white ">{description_one.slice(0, 75)}...</p> */}
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    $249.99
                  </span>
                  <Link
                    to={`/services/ndnadaldladkal`}
                    className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={addServicesHandler} className="space-y-4">
                {/* title  */}

                <div>
                  <label className="sr-only" htmlFor="name">
                    Title
                  </label>
                  <input
                    className="w-full rounded-lg border border-emerald-300 p-3 text-sm"
                    placeholder="Add a Title"
                    type="text"
                    name="title"
                    required
                    id="name"
                  />
                </div>
                {/* title  */}

                <div>
                  <label className="sr-only" htmlFor="email">
                    Add a image url
                  </label>
                  <input
                    className="w-full rounded-lg border border-emerald-300 p-3 text-sm"
                    placeholder="Add a image url"
                    type="text"
                    name="imgUrl"
                    required
                    id="email"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-center ">
                    <p className="mr-3 text-gray-400">Add Services Rating</p>
                    <select
                      className="w-1/5 bg-emerald-300  font-bold"
                      defaultValue={5}
                      onChange={(event) => setRating(event.target.value)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Price
                    </label>
                    <input
                      className="w-full  rounded-lg border border-emerald-300  p-3 text-sm"
                      placeholder="Add Services Price"
                      type="tel"
                      name="servicesPrice"
                      required
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Services Description
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-emerald-300 p-3 text-sm"
                    placeholder="Add Services Description"
                    name="description"
                    rows="8"
                    required
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-lg hover:bg-emerald-800 bg-emerald-600 px-5 py-3 text-white sm:w-auto"
                  >
                    <span className="font-medium"> Add Services </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMyservices;
