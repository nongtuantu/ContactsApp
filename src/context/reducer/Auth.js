import {
  CLEAR_DATA,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../constants/actionType";

const Auth = (state, { type, payload }) => {
  switch (type) {
    //register action
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        data: null,
      };

    //login action
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload,
        isLoggedIn: true,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    //log out user
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        error: null,
        data: null,
      };

    default:
      return state;
  }
};

export default Auth;
