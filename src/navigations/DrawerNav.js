import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HOME_NAV } from "../constants/routeName";
import HomeNav from "./HomeNav";
import SlideMenus from "./SlideMenus";
import { useContext } from "react";
import { GlobalContext } from "../context/Provider";
const Drawer = createDrawerNavigator();

const setContent = (navigation, authDispatch) => {
  return <SlideMenus navigation={navigation} authDispatch={authDispatch} />;
};
//Tạo 1 màn hình menu với drawerNavigator
const DrawerNav = () => {
  const { authDispatch } = useContext(GlobalContext);

  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({ navigation }) => setContent(navigation, authDispatch)}
    >
      <Drawer.Screen name={HOME_NAV} component={HomeNav} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
