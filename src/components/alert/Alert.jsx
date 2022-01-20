import { css } from "@emotion/css";
import React, { useContext } from "react";
 
import authContext from "../../context/auth/authContext";
const Alert = () => {
  const AuthContext = useContext(authContext);
  const { message, errors } = AuthContext;
  return <div > <p className={css`background-color:red; padding:2rem; color:#fff;`}>{message || errors}</p></div>
};

export default Alert;
