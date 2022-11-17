import React, { useEffect, useState } from "react";
import UseTitle from "../../Hooks/UseTitle";
import Sppiner from "../Others/Sppiner";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {
  UseTitle('Services')
  const [services, setServices] = useState([]);



  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(0);

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
    <div className="container px-8 mx-auto ">
      {
        !services?.services && <Sppiner></Sppiner>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
        {services?.services?.map((servicesDetails) => (
          <ServicesCard
            servicesDetails={servicesDetails}
            key={servicesDetails._id}
          ></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
