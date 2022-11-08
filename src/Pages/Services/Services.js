import React, { useEffect, useState } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  const [dataLimit, setDataLimit] = useState(3);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div className="container px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((servicesDetails) => (
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
