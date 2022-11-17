import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hooks/UseTitle";

import Sppiner from "../Others/Sppiner";
import Pagination from "../Pagination/Pagination";
import ServicesCard from "../Services/ServicesCard/ServicesCard";
import HomeBanner from "./HomeBanner";
import HomeImageWithGrid from "./HomeImageWithGrid";
import LetUsCallYou from "./LetUsCallYou";


const Home = () => {
  //   const [dataLimit, setDataLimit] = useState(3);
  UseTitle('Home')
  const { setLoading, loading } = useContext(AuthContext);
  const [services, setServices] = useState([]);

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);

  const pages = Math.ceil(count / size);


  useEffect(() => {

    const unSubscribe = fetch(
      `https://cleaner-guy-server.vercel.app/services?page=${page}&size=${size}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setCount(data?.count);
      });
  }, [page, size]);

  const paginationInfo = {
    page,
    setPage,
    setSize,
    pages,
  };

  return (
    <div>
      <HomeBanner></HomeBanner>
      {
        !services?.services && <Sppiner></Sppiner>
      }
      <div className=" container my-20 px-4 mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Services Data Loading  */}

          {services?.services?.map((servicesDetails) => (
            <ServicesCard
              key={servicesDetails._id}
              servicesDetails={servicesDetails}
            ></ServicesCard>
          ))}
        </div>

        {/* Pagination  */}
        <div>
          <div className=" flex justify-center my-10">
            <Pagination paginationInfo={paginationInfo}></Pagination>
          </div>
        </div>

        {/* See ALL Button  */}

        <div className="flex justify-center">
          <Link
            to="/services"
            className="group relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-green-500"
            href="/download"
          >
            <span className="absolute left-0 -translate-x-full transition-transform group-hover:translate-x-4">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:ml-4">
              See All
            </span>
          </Link>
        </div>

        <LetUsCallYou></LetUsCallYou>
        <HomeImageWithGrid></HomeImageWithGrid>
      </div>
    </div>
  );
};

export default Home;
