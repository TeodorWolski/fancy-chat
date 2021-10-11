import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import { routes } from "routes";

const cookies = new Cookies();

const authToken = cookies.get("token");

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authToken ? <Component {...props} /> : <Redirect to={routes.login} />
    }
  />
);

export default PrivateRoute;
