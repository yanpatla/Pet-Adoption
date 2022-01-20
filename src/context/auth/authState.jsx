import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import axiosClient from "../../config/axios";
import {
  ADOPT_PET,
  CLEAN_ALERT,
  CLEAN_ERROR,
  DELETE_SAVE_PET,
  ERROR_LOGIN,
  ERROR_REGISTER,
  GET_CURRENT_USER,
  LOG_OUT,
  RETURN_PET,
  SAVE_PET,
  SUCCESSFUL_LOGIN,
  SUCCESSFUL_REGISTER,
  UPDATE_CURRENT_USER,
  USER_AUTH,
} from "../../types";
import tokenAuth from "../../config/token";
const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("rptken"),
    authenticated: null,
    user: null,
    message: null,
    errors: null,
    pageloading: true,
    currentuser: {},
    loadinguser: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const userRegister = async (data) => {
    try {
      const res = await axiosClient.post("/api/users", data);

      dispatch({
        type: SUCCESSFUL_REGISTER,
        payload: res.data.msg,
      });
      setTimeout(() => {
        dispatch({
          type: CLEAN_ALERT,
        });
      }, 3000);
    } catch (error) {
      dispatch({
        type: ERROR_REGISTER,
        payload: error.response.data.msg,
      });
      setTimeout(() => {
        dispatch({
          type: CLEAN_ERROR,
        });
      }, 3000);
    }
  };

  const userAuth = async () => {
    const token = localStorage.getItem("rptken");
    if (token) {
      tokenAuth(token);
    }

    try {
      const res = await axiosClient.get("/api/auth");

      dispatch({
        type: USER_AUTH,
        payload: res.data.user,
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  const logIn = async (data) => {
    try {
      const res = await axiosClient.post("/api/auth", data);

      dispatch({
        type: SUCCESSFUL_LOGIN,
        payload: res.data.token,
      });
      userAuth();
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: ERROR_LOGIN,
        payload: error.response.data.msg,
      });
      setTimeout(() => {
        dispatch({
          type: CLEAN_ERROR,
        });
      }, 3000);
    }
  };

  const logOut = async () => {
    dispatch({
      type: LOG_OUT,
    });
  };

  const getUserById = async (_id) => {
    try {
      const res = await axiosClient.get(`/api/users/${_id}`);

      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data[0],
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateUserById = async (data) => {
    try {
      const res = await axiosClient.put(`/api/users/${data.id}`, data);

      dispatch({
        type: UPDATE_CURRENT_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const petSave = async (_id) => {
    const res = await axiosClient.post(`/api/pet/${_id}/save`);

    dispatch({
      type: SAVE_PET,
      payload: res.data.updateUser.savedPets,
    });
  };
  const petSaveDelete = async (_id) => {
    try {
      const res = await axiosClient.delete(`/api/pet/${_id}/save`);

      dispatch({
        type: DELETE_SAVE_PET,
        payload: res.data.updateUser.savedPets,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const adoptPet = async (_id) => {
    const res = await axiosClient.post(`/api/pet/${_id}/adopt`);

    dispatch({
      type: ADOPT_PET,
      payload: res.data.updateUser.adoptedPets,
    });
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const returnPet = async (_id) => {
    const res = await axiosClient.post(`/api/pet/${_id}/return`);

    dispatch({
      type: RETURN_PET,
      payload: res.data.updateUser.adoptedPets,
    });
  };
  return (
    <authContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        errors: state.errors,
        pageloading: state.pageloading,
        currentuser: state.currentuser,
        loadinguser: state.loadinguser,
        userRegister,
        logIn,
        userAuth,
        logOut,
        getUserById,
        updateUserById,
        petSave,
        petSaveDelete,
        adoptPet,
        returnPet,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
