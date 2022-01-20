import React, { useReducer } from "react";
import adminContext from "./adminContex";
import adminReduce from "./adminReduce";
import axiosClient from "../../config/axios";
import { GET_USERS} from "../../types";

const AdminState = ({ children }) => {
  const initialState = {
    users: [],
  };

  const [state, dispatch] = useReducer(adminReduce, initialState);

  const getUsers = async (data) => {
    try {
      const res = await axiosClient.get("/api/users/", data);
   
      dispatch({
        type: GET_USERS,
        payload: res.data.user,
      });
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <adminContext.Provider value={{ users: state.users, getUsers  }}>
      {children}
    </adminContext.Provider>
  );
};

export default AdminState;
