import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRouteHome = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth && !localStorage.getItem("auth_token")) {
    return <Navigate to='/login' replace />;
  }
  return children;
};

export default ProtectedRouteHome;
