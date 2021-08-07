import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";
import AuthNav from "./AuthNav";
import { useContext } from "react";
import { GlobalContext } from "../context/Provider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { useEffect } from "react";

const AppNavContainer = () => {
  const {
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  const [checkUse, setCheckUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // kiểm tra dữ liệu user trong storage
  const getUser = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      setCheckUser(true);
      setLoaded(true);
    } else {
      setCheckUser(false);
      setLoaded(true);
    }
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  return (
    //kiểm tra nếu đã tồn tại user trong starage, hiện home screen và ngược lại hiện auth screen
    <>
      {loaded ? (
        <NavigationContainer>
          {checkUse ? <DrawerNav /> : <AuthNav />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};

export default AppNavContainer;
