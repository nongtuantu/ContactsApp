import {
  EDIT_CONTACT_FAIL,
  EDIT_CONTACT_LOADING,
  EDIT_CONTACT_SUCCESS,
} from "../../constants/actionType";
import axiosInterceptor from "../axiosInterceptor";

export default (id, form) => (dispatch) => (onSuccess) => {
  const data = {
    country_code: form.country_code || "",
    first_name: form.first_name || "",
    last_name: form.last_name || "",
    phone_number: form.phone_number || "",
    contact_picture: form.contact_picture || null,
    is_favorite: form.is_favorite || false,
  };
  dispatch({
    type: EDIT_CONTACT_LOADING,
  });

  axiosInterceptor
    .put(`/contacts/${id}`, data)
    .then((res) => {
      dispatch({
        type: EDIT_CONTACT_SUCCESS,
        payload: res.data,
      });
      onSuccess(res.data);
    })
    .catch((err) => {
      dispatch({
        type: EDIT_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, try again" },
      });
    });
};
