import { Platform, StyleSheet } from "react-native";
import colors from "../../../constants/colors";

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    marginTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: colors.white,
  },
});
