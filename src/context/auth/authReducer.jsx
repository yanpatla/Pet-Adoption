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

export default (state, action) => {
  switch (action.type) {
    case SUCCESSFUL_REGISTER:
      return {
        ...state,
        message: action.payload,
        pageloading: false,
      };
    case ERROR_REGISTER:
      return {
        ...state,
        errors: action.payload,
      };

    case CLEAN_ALERT:
      return {
        ...state,
        message: null,
      };
    case CLEAN_ERROR:
      return {
        ...state,
        errors: null,
      };

    case SUCCESSFUL_LOGIN:
      localStorage.setItem("rptken", action.payload);
      return {
        ...state,
        token: action.payload,
        authenticated: true,
        pageloading: false,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        errors: action.payload,
      };

    case USER_AUTH:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        pageloading: false,
      };

    case LOG_OUT:
      localStorage.removeItem("rptken");
      return {
        ...state,
        user: null,
        authenticated: null,
        token: "",
        pageloading: false,
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        currentuser:
          state.currentuser._id === action.payload._id
            ? action.payload
            : state.currentuser,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        currentuser: action.payload,
        loadinguser: false,
      };
    case ADOPT_PET:
    case SAVE_PET:
    case RETURN_PET:
      return {
        ...state,
        currentuser: [...action.payload],
      };

    case DELETE_SAVE_PET:
      return {
        ...state,
        currentuser: action.payload.filter(
          (el) => el !== state.currentuser._id
        ),
      };
    default:
      return state;
  }
};
