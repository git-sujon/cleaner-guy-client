import React from "react";

const Sppiner = () => {
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p class="ml-2">Just Wait a Moment.......</p>
      </div>
    </div>
  );
};

export default Sppiner;
