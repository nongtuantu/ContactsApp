import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "../screen/Contacts";
import {
  CONTACTS_LIST,
  CONTACT_DETAIL,
  CREATE_CONTACT,
  SETTING,
} from "../constants/routeName";
import ContactDetail from "../screen/ContactDetail";
import CreateContact from "../screen/CreateContact";
import Setting from "../screen/Setting";

const HomeStack = createStackNavigator();

const HomeNav = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={CONTACTS_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={SETTING} component={Setting} />
    </HomeStack.Navigator>
  );
};

export default HomeNav;
