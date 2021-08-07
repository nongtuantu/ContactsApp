import axiosInterceptor from "../axiosInterceptor";
import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_DATA,
} from "../../constants/actionType";

export const clearData = () => (dispatch) => {
  dispatch({
    type: CLEAR_DATA,
  });
};

export default (form) => (dispatch) => (onSuccess) => {
  const data = {
    username: form.username,
    first_name: form.first_name,
    last_name: form.last_name,
    email: form.email,
    password: form.password,
  };

  dispatch({
    type: REGISTER_LOADING,
  });

  axiosInterceptor
    .post("/auth/register", data)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, please try again" },
      });
    });
};
