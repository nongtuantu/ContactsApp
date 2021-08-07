import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import LoginComponent from "../../components/LoginComponent";
import { useRoute } from "@react-navigation/core";
import { useEffect } from "react";
import { GlobalContext } from "../../context/Provider";
import { useContext } from "react";
import loginAction from "../../config_api/action/loginAction";

const Contacts = () => {
  const [form, setForm] = useState({});

  const {
    authState: { loading, error, isLoggedIn },
    authDispatch,
  } = useContext(GlobalContext);

  const { params } = useRoute();

  useEffect(() => {
    if (params?.data) {
      setForm({ ...form, username: params.data.username });
    }
  }, [params]);

  const onChangeText = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onPress = () => {
    //nếu tất cả các trường đều không null, thực hiện login
    if (form.username && form.password) {
      loginAction(form)(authDispatch);
    }
  };

  return (
    <LoginComponent
      form={form}
      onChangeText={onChangeText}
      onPress={onPress}
      loading={loading}
      error={error}
    />
  );
};

export default Contacts;
