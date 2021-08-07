import React from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { View, Text } from "react-native";
import authInitialState from "./initialState/authInitialState";
import contactsInitialState from "./initialState/contactsInitialState";
import Auth from "./reducer/Auth";
import Contacts from "./reducer/Contacts";

export const GlobalContext = createContext({}); //Tạo context sử dụng cho toàn project

const Provider = ({ children }) => {
  //tạo các state và các action sử dụng useReducer
  const [authState, authDispatch] = useReducer(Auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    Contacts,
    contactsInitialState
  );

  return (
    <GlobalContext.Provider
      value={{ authState, authDispatch, contactsState, contactsDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Provider;
