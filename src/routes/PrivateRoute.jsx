import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { toast } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="text-center mt-3">
        <Spinner variant="primary"></Spinner>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <>
       {toast.success("You need to login first")}
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    </>
  );
};

export default PrivateRoute;
