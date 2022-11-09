import React from "react";

const Sppiner = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-32 h-32 border-4 border-green-900 rounded-full animate-spin"
        ></div>
        <p className="ml-2 text-2xl  font-bold">Please Reload The Page....... </p>

      </div>
    </div>
  );
};

export default Sppiner;
