import {
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from "../../constants/actionType";
import axiosInterceptor from "../axiosInterceptor";

export default (id) => (dispatch) => (onSuccess) => {
  dispatch({
    type: DELETE_CONTACT_LOADING,
  });

  axiosInterceptor
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => {
      dispatch({
        type: DELETE_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
