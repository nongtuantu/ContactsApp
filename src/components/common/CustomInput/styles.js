import { ScaledSheet } from "react-native-size-matters";
import colors from "../../../constants/colors";

export default ScaledSheet.create({
  wrapper: {
    height: "46@s",
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 3,
  },
  textInput: {
    flex: 1,
  },
  label: {
    marginBottom: 3,
  },
  container: {
    marginVertical: 10,
  },
  error: {
    fontSize: 12,
    marginTop: 3,
    color: colors.error,
  },
});
