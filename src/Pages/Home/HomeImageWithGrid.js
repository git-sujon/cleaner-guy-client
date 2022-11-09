import React from "react";
import { Link } from "react-router-dom";

const HomeImageWithGrid = () => {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-2xl  py-8 ">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="bg-teal-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div class="mx-auto max-w-xl text-center">
                <h2 class="text-2xl font-bold text-white md:text-3xl">
                We Are Best Solution For Your House Cleaning Services
                </h2>

                <p class="hidden text-white/90 sm:mt-4 sm:block">
                You’ve got things to do that are more important than cleaning a messy house. Let us take care of it! We provides trustworthy, high-quality home. If you’re like most homeowners, you don’t clean windows. That’s because streak free quality window cleaning is often difficult.
                </p>

                <div class="mt-4 md:mt-8">
                  <Link
                    to="/services"
                    class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-teal-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt="Student"
                src="https://5.imimg.com/data5/BS/SX/GLADMIN-64970353/commercial-housekeeping-services-500x500.jpg"
                class="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                alt="Student"
                src="https://www.springcleaning.ae/wp-content/uploads/2017/04/20160809online-rendelheto-takaritas1.jpg"
                class="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeImageWithGrid;
