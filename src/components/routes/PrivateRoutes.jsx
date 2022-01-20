import React, { useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../../context/auth/authContext";

const PrivateRoutes = ({ component: Component, ...props }) => {
  const AuthContext = useContext(authContext);
  const { authenticated, userAuth, pageloading } = AuthContext;
  useEffect(() => {
    userAuth();
    // eslint-disable-next-line
  }, []);
   
  return (
    <Route
      {...props}
      render={(props) =>
        !authenticated && !pageloading ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoutes;
  