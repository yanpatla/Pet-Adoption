import {
  ADD_PET,
  ADD_PET_ERROR,
  GET_ANIMAL_TYPE,
  GET_MY_PETS,
  GET_PETS,
  GET_PET_BY_ID,
} from "../../types";

 
export default (state, action) => {
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        loading: false,
        pets: action.payload,
      };

    case GET_ANIMAL_TYPE:
      return {
        ...state,
        animalTypes: action.payload,
      };

    case GET_MY_PETS:
      return {
        ...state,
        loading: false,
        mypets: action.payload,
      };
    case GET_PET_BY_ID:
      return {
        ...state,
        currentpet: action.payload,
      };
    case ADD_PET:
      return {
        ...state,
        pets: [...state.pets, action.payload],
   
      };

    case ADD_PET_ERROR:
      return {
        ...state,
        errorspet: action.payload,
      };

    default:
      return state;
  }
};
