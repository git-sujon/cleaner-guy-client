import React, { useState } from "react";

const AddMyservices = () => {
  // const servicesDetails= { title, img_card, _id, description_one, price, rating }

  const [rating, setRating] = useState(5);
  console.log(rating);

  return (
    <div>
      <section class="bg-gray-100">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

            {/* Live ShowCase  */}

            <div class="lg:col-span-2 lg:py-12">
              <p class="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div class="mt-8">
                <a href="" class="text-2xl font-bold text-pink-600">
                  0151 475 4450
                </a>

                <address class="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" class="space-y-4">
                {/* title  */}

                <div>
                  <label class="sr-only" for="name">
                    Title
                  </label>
                  <input
                    class="w-full rounded-lg border border-emerald-300 p-3 text-sm"
                    placeholder="Add a Title"
                    type="text"
                    name="title"
                    id="name"
                  />
                </div>
                {/* title  */}

                <div>
                  <label class="sr-only" for="email">
                    Add a image url
                  </label>
                  <input
                    class="w-full rounded-lg border border-emerald-300 p-3 text-sm"
                    placeholder="Add a image url"
                    type="email"
                    name="imgUrl"
                    id="email"
                  />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    
                 <div className="flex items-center ">
                 <p className="mr-3 text-gray-400">Add Services Rating</p>
                 <select
                    className="w-1/5 bg-emerald-300  font-bold"
                    onChange={(event) =>
                      setRating(parseInt(event.target.value))
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option selected value="5">
                      5
                    </option>
                  </select>
                 </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Price
                    </label>
                    <input
                      class="w-full  rounded-lg border border-emerald-300  p-3 text-sm"
                      placeholder="Add Services Price"
                      type="tel"
                      name="servicesPrice"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label class="sr-only" for="message">
                    Services Description
                  </label>
                  <textarea
                    class="w-full rounded-lg border border-emerald-300 p-3 text-sm"
                    placeholder="Add Services Description"
                    name="description"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-flex w-full items-center justify-center rounded-lg bg-emerald-600 px-5 py-3 text-white sm:w-auto"
                  >
                    <span class="font-medium"> Add Services </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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

const x = {
  _id: "6369dce37e39fc7a84ed2aab",
  title: "House Cleaning",
  rating: "4.5",
  img_card:
    "https://plus.unsplash.com/premium_photo-1661777227443-77e227eb8d35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  price: "250.99",
  description_one:
    "We use our unique Detail-Clean Rotation System to ensure that our customers’ homes always meet our high standard of cleanliness. This system was developed over 25+ years of professional house cleaning experience. We use this system to ensure that our clients are always satisfied and can expect a consistently clean and beautiful space.",
};
