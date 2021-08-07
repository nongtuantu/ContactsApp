import React from "react";
import { useState } from "react";
import { View, Text } from "react-native";
import RegisterComponent from "../../components/RegisterComponent";
import registerAction, {
  clearData,
} from "../../config_api/action/registerAction";
import { LOGIN } from "../../constants/routeName";
import { useNavigation } from "@react-navigation/core";
import { useContext } from "react";
import { GlobalContext } from "../../context/Provider";
import { useFocusEffect } from "@react-navigation/core";

const Contacts = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const {
    authState: { data, loading, error },
    authDispatch,
  } = useContext(GlobalContext);

  const { navigate } = useNavigation();

  //xóa data và error khi hoàn thành đăng ký và chuyển hướng
  useFocusEffect(
    React.useCallback(() => {
      if (data) {
        clearData(authDispatch);
      }
    }, [data])
  );

  //mỗi khi nhập vào, lưu value vừa nhập vào thuộc tính name tương ứng trong form
  const onChangeText = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    //nếu có value nhập vào, đặt erors về null, và nếu không có value cặp nhật erors với name tương ứng
    //nếu password < 8 char thì cập nhật erros cho password và ngược lại về null
    if (value != "") {
      if (name === "password") {
        if (value.length < 8) {
          setErrors((err) => {
            return {
              ...err,
              [name]: "Password must be have more than 7 characters",
            };
          });
        } else {
          setErrors((err) => {
            return {
              ...err,
              [name]: null,
            };
          });
        }
      } else {
        setErrors((err) => {
          return {
            ...err,
            [name]: null,
          };
        });
      }
    } else {
      setErrors((err) => {
        return {
          ...err,
          [name]: "This field is required",
        };
      });
    }
  };

  const onPress = () => {
    //nếu không có value đc nhập vào, cập nhật lỗi cho erros với name tương ứng
    if (!form.username) {
      setErrors((err) => {
        return {
          ...err,
          username: "Please enter username and try again",
        };
      });
    }
    if (!form.first_name) {
      setErrors((err) => {
        return {
          ...err,
          first_name: "Please enter first name and try again",
        };
      });
    }
    if (!form.username) {
      setErrors((err) => {
        return {
          ...err,
          last_name: "Please enter last name and try again",
        };
      });
    }
    if (!form.email) {
      setErrors((err) => {
        return {
          ...err,
          email: "Please enter email and try again",
        };
      });
    }
    if (!form.password) {
      setErrors((err) => {
        return {
          ...err,
          password: "Please enter password and try again",
        };
      });
    }

    // nếu tất cả các trường khác null và erros khác null, thực hiện yêu cầu register
    if (
      Object.values(form).length == 5 && //cả 5 trường đều ko được trống, đều phải có dữ liệu
      Object.values(errors).every((item) => !item) && //tất cả các trường đều không có errors
      Object.values(form).every((item) => item.trim().length > 0) //tất cả các dữ liệu trong từng trường sau khi loại bỏ khoảng trắng phải lớn hơn 0
    ) {
      registerAction(form)(authDispatch)((data) => {
        navigate(LOGIN, { data });
      });
    }
  };
  return (
    <RegisterComponent
      onChangeText={onChangeText}
      onPress={onPress}
      errors={errors}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Contacts;
