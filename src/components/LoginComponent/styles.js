import { ScaledSheet } from "react-native-size-matters";
import colors from "../../constants/colors";

export default ScaledSheet.create({
  image: {
    height: "150@s",
    width: "150@s",
    alignSelf: "center",
    marginVertical: "20@s",
  },
  title: {
    fontSize: "28@s",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: "18@s",
    textAlign: "center",
    marginVertical: 10,
  },
  link: {
    color: colors.primary,
    paddingLeft: 10,
  },
});
