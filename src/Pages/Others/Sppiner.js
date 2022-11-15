import React from "react";

const Sppiner = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-20 h-20 border-4 border-green-900 rounded-full animate-spin"
        ></div>
      </div>
    </div>
  );
};

export default Sppiner;
