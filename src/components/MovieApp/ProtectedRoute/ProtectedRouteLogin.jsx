import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRouteLogin = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (auth || localStorage.getItem("auth_token")) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRouteLogin;
