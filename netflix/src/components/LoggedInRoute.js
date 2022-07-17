import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const LoggedInRoute = ({ children }) => {
  const { user } = UserAuth();

  if (user) {
    return <Navigate to="/browse" />;
  } else {
    return children;
  }
};

export default LoggedInRoute;
