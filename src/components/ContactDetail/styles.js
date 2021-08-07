import { ScaledSheet } from "react-native-size-matters";

export default ScaledSheet.create({
  image: {
    height: "150@s",
    width: "150@s",
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: 20,
  },
  nameTop: {
    height: 80,
    borderWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  contactMethods: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  phoneNumber: {
    height: 50,
    marginVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
