import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGOUT_USER } from "../../constants/actionType";

export default () => (dispatch) => {
  AsyncStorage.removeItem("user");
  AsyncStorage.removeItem("token");

  dispatch({ type: LOGOUT_USER });
};
