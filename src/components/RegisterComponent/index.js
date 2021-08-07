import React, { useRef } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ContainerComponent from "../common/ContainerComponent";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
import { LOGIN } from "../../constants/routeName";
import { useEffect } from "react";

const RegisterComponent = ({
  onChangeText,
  onPress,
  form,
  errors,
  error,
  loading,
}) => {
  const { navigate } = useNavigation();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  return (
    <ContainerComponent>
      <Image
        source={require("../../constants/images/logo.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Welcome to contacts</Text>
      <Text style={styles.subTitle}>Create a new free account</Text>

      <View>
        <CustomInput
          label="Username"
          placeholder="Enter username"
          onChangeText={(value) =>
            onChangeText({ name: "username", value: value })
          }
          error={errors.username || error?.username?.[0]}
          returnKeyType="next"
          onSubmitEditing={() => firstNameRef.current.focus()}
        />
        <CustomInput
          returnKeyType="next"
          refInput={firstNameRef}
          onSubmitEditing={() => lastNameRef.current.focus()}
          label="First name"
          placeholder="Enter first name"
          onChangeText={(value) =>
            onChangeText({ name: "first_name", value: value })
          }
          error={errors.first_name || error?.first_name?.[0]}
        />
        <CustomInput
          returnKeyType="next"
          refInput={lastNameRef}
          onSubmitEditing={() => emailRef.current.focus()}
          label="Last name"
          placeholder="Enter last name"
          onChangeText={(value) =>
            onChangeText({ name: "last_name", value: value })
          }
          error={errors.last_name || error?.last_name?.[0]}
        />
        <CustomInput
          returnKeyType="next"
          refInput={emailRef}
          onSubmitEditing={() => passRef.current.focus()}
          label="Email"
          placeholder="Enter email"
          onChangeText={(value) =>
            onChangeText({ name: "email", value: value })
          }
          error={errors.email || error?.email?.[0]}
        />
        <CustomInput
          refInput={passRef}
          label="Password"
          placeholder="Enter password"
          iconNameHide="eye-off"
          iconNameShow="eye"
          secureTextEntry={true}
          onChangeText={(value) =>
            onChangeText({ name: "password", value: value })
          }
          error={errors.password || error?.password?.[0]}
        />
      </View>

      <CustomButton
        title="Sign up"
        isDisable={false}
        primary
        onPress={onPress}
        isDisable={loading}
        loading={loading}
      />

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate(LOGIN)}>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ContainerComponent>
  );
};

export default RegisterComponent;
