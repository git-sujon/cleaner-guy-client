import React from "react";
import { useContext } from "react";
import { createContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Sppiner from "../Pages/Others/Sppiner";

const PrivateRouteContext = createContext();

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);



  if (loading) {
    
    return <Sppiner></Sppiner>

  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
