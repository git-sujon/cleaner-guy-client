import React from "react";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../../../Hooks/UseTitle";

const BlogDetails = () => {
  const blogDetaills = useLoaderData();
  const { _id, img, question, CATEGORY, ans_p_one, cover_img, ans_p_two } =
    blogDetaills;
    UseTitle(`Blog- ${question}`)

  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
            // style="height: 24em;"
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10"
            //   style="background-image: linear-gradient(180deg,transparent,rgba(0,0,0,.7));"
            ></div>
            <div><img className="mv" src={cover_img} alt="" /></div>

            <div className="p-4">
              <p
                
                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
              >
                {CATEGORY}
              </p>
              <h2 className="text-4xl font-semibold  leading-tight">
                {question}
              </h2>
              <div className="flex mt-3">
                <img
                  src="https://randomuser.me/api/portraits/men/97.jpg" className="h-10 w-10 rounded-full mr-2 object-cover" alt=""/>
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    {" "}
                    Mike Sullivan{" "}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs"> 27 Oct </p>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-0 mt-5 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
            <p className="pb-6">
             {ans_p_one}
            </p>
            <p className="pb-6">
             {ans_p_two}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogDetails;
