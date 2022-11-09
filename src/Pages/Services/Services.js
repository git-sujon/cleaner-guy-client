import React, { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(0);

  const pages = Math.ceil(count / size);
  console.log(count);

  useEffect(() => {
    const unSubscribe = fetch(
      `http://localhost:5000/services?page=${page}&size=${size}`
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
    <div className="container px-8 mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
