import { ScaledSheet } from "react-native-size-matters";

export default ScaledSheet.create({
  image: {
    height: "200@s",
    width: "200@s",
    alignSelf: "center",
    marginVertical: 50,
  },
  items: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
  },
  name: {
    fontSize: 17,
    paddingLeft: 5,
  },
});
