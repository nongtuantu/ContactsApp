import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../constants/colors";

export default ScaledSheet.create({
  wrapper: {
    height: "46@s",
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    marginVertical: "10@s",
  },
  text: {
    color: colors.white,
  },
  dismiss: {
    color: colors.white,
    fontSize: 21,
  },
});
