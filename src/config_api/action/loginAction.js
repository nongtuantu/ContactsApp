import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../../constants/actionType";
import axiosInterceptor from "../axiosInterceptor";

export default (form) => (dispatch) => {
  const data = {
    username: form.username,
    password: form.password,
  };

  dispatch({
    type: LOGIN_LOADING,
  });

  axiosInterceptor
    .post("/auth/login", data)
    .then((res) => {
      //lưu token và user vào storage
      AsyncStorage.setItem("user", JSON.stringify(res.data));
      AsyncStorage.setItem("token", res.data.token);

      //nếu thành công yêu cầu login đến server trả về dữ liệu lưu vào biến payload
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      //nếu có lỗi khi gửi yêu cầu đến server, trả về err.response.data, nếu lỗi hệ thống(internet,...) trả về error
      console.log(`error`);
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "Something went wrong, please try again" },
      });
    });
};
