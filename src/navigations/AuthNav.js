import React from "react";
import { View, Text } from "react-native";
import Contacts from "../screen/Contacts";
import { LOGIN, REGISTER } from "../constants/routeName";
import Login from "../screen/Login";
import Register from "../screen/Register";
import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const AuthNav = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNav;
