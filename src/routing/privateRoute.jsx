import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogedin } from "../components/ckeckLogin";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogedin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
