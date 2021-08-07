import { StyleSheet } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "../../constants/colors";

export default ScaledSheet.create({
  addIcon: {
    height: "46@s",
    width: "46@s",
    borderRadius: 100,
    backgroundColor: "#ff0000",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  containerAll: {
    backgroundColor: colors.white,
  },
  imageDefault: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: colors.grey,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewItems: {
    flexDirection: "row",
    paddingVertical: 5,
    // /backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 5,
  },
  viewName: {
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 17,
    paddingRight: 7,
  },
  phoneNumber: {
    paddingHorizontal: 20,
    opacity: 0.4,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
    alignSelf: "center",
  },
});
