import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../constants/colors";

export default ScaledSheet.create({
  wrapper: {
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container: {
    minHeight: "200@s",
    backgroundColor: colors.white,
    width: "90%",
    borderRadius: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
  },
  body: {
    minHeight: "100@s",
    width: "100%",
    paddingHorizontal: 10,
  },
});
