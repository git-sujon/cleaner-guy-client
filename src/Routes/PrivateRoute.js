import React from "react";
import { useContext } from "react";
import { createContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRouteContext = createContext();

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  console.log(user);
  console.log(loading);

  if (loading) {
    return (
      <div class="flex items-center justify-center min-h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          class="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p class="ml-2">Just Wait a Moment.......</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
