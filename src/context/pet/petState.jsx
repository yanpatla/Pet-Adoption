import React, { useReducer  } from "react";
import petContext from "./petContext";
import petReducer from "./petReducer";
import axiosClient from "../../config/axios";
import {
  ADD_PET,
  ADD_PET_ERROR,
  GET_ANIMAL_TYPE,
  GET_MY_PETS,
  GET_PETS,
  GET_PET_BY_ID,
  
} from "../../types";

const PetState = ({ children }) => {
  const initialState = {
    pets: [],
    mypets: [],
    currentpet: {},
    animalTypes: [],
    errorspet: [],
    selectedpet: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(petReducer, initialState);

  const getPets = async (data) => {
    try {
      const res = await axiosClient.get("/api/pet", {
        params: { data },
      });
      

      dispatch({
        type: GET_PETS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getAnimalType = async (data) => {
    try {
      const res = await axiosClient.get("/api/animalType", data);
      dispatch({
        type: GET_ANIMAL_TYPE,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getMyPets = async (_id) => {
    try {
      const res = await axiosClient.get(`/api/pet/user/${_id}`);

      dispatch({
        type: GET_MY_PETS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPetById = async (_id) => {
    try {
      const res = await axiosClient.get(`/api/pet/${_id}`);
      dispatch({
        type: GET_PET_BY_ID,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const addPet = async (data) => {
    try {
      const res = await axiosClient.post("/api/pet/", data);
 
      dispatch({
        type: ADD_PET,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PET_ERROR,
        payload: error.response.data.errors,
      });
      console.log(error.response.data.errors);
    }
  };

  const updatePet = async (id, data) => {
    try {
      const res = await axiosClient.put(`/api/pet/${id}`, data);
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <petContext.Provider
      value={{
        pets: state.pets,
        loading: state.loading,
        animalTypes: state.animalTypes,
        mypets: state.mypets,
        currentpet: state.currentpet,
        selectedpet: state.selectedpet,
        errorspet:state.errorspet,
        getPets,
        getAnimalType,
        getMyPets,
        getPetById,
        addPet,
        updatePet,
      }}
    >
      {children}
    </petContext.Provider>
  );
};

export default PetState;
