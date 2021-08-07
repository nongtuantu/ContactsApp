import React, { useContext, useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { GlobalContext } from "../../context/Provider";
import CreateContactComponent from "../../components/CreateContactComponent";
import createContact from "../../config_api/action/createContact";
import { useNavigation } from "@react-navigation/core";
import { CONTACTS_LIST, CONTACT_DETAIL } from "../../constants/routeName";
import upLoadImage from "../../config_api/action/upLoadImage";
import { useRoute } from "@react-navigation/core";
import editContact from "../../config_api/action/editContact";

const Contacts = () => {
  const [form, setForm] = useState({});

  const { navigate, setOptions } = useNavigation();

  const { params: { contact = {} } = {} } = useRoute();

  const [imageSelected, setImageSelected] = useState(null);
  const [uploading, setUploading] = useState(false);

  const refSheet = useRef();

  const openSheet = () => {
    if (refSheet.current) {
      refSheet.current.open();
    }
  };

  const closeSheet = () => {
    if (refSheet.current) {
      refSheet.current.close();
    }
  };

  const onSelected = (image) => {
    closeSheet();
    setImageSelected(image);
    console.log(`imageSelected`, imageSelected.path);
  };
  const {
    contactsDispatch,
    contactsState: {
      createContact: { data, loading, error },
    },
  } = useContext(GlobalContext);

  const onChangeText = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const onToggleSwitch = () => {
    setForm({ ...form, is_favorite: !form.is_favorite });
  };
  const onPress = () => {
    if (contact?.id) {
      if (imageSelected?.size) {
        if (Object.values(form).length >= 4) {
          setUploading(true);
          upLoadImage(imageSelected)((url) => {
            setUploading(false);
            editContact(contact.id, { ...form, contact_picture: url })(
              contactsDispatch
            )((item) => {
              navigate(CONTACT_DETAIL, { item });
            });
          })((error) => {
            setUploading(false);
          });
        } else {
          editContact(contact.id, form)(contactsDispatch)((item) => {
            navigate(CONTACT_DETAIL, { item });
          });
        }
      } else {
        editContact(contact.id, form)(contactsDispatch)((item) => {
          navigate(CONTACT_DETAIL, { item });
        });
      }
    } else {
      if (imageSelected?.size) {
        if (Object.values(form).length >= 4) {
          setUploading(true);
          upLoadImage(imageSelected)((url) => {
            setUploading(false);
            createContact({ ...form, contact_picture: url })(contactsDispatch)(
              () => {
                navigate(CONTACTS_LIST);
              }
            );
          })((error) => {
            setUploading(false);
          });
        } else {
          createContact(form)(contactsDispatch)(() => {
            navigate(CONTACTS_LIST);
          });
        }
      } else {
        createContact(form)(contactsDispatch)(() => {
          navigate(CONTACTS_LIST);
        });
      }
    }
  };

  useEffect(() => {
    setOptions({
      headerTitle: contact?.first_name
        ? contact.first_name + " " + contact.last_name
        : "Create a new contact",
    });
  }, [contact?.first_name]);

  useEffect(() => {
    if (contact) {
      setForm({
        ...form,
        first_name: contact.first_name,
        last_name: contact.last_name,
        contact_picture: contact.contact_picture,
        phone_number: contact.phone_number,
        country_code: contact.country_code,
        is_favorite: contact.is_favorite,
      });
    }
  }, []);

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      onPress={onPress}
      form={form}
      onToggleSwitch={onToggleSwitch}
      setForm={setForm}
      error={error}
      loading={loading || uploading}
      refSheet={refSheet}
      openSheet={openSheet}
      onSelected={onSelected}
      imageSelected={imageSelected}
      contact={contact}
    />
  );
};

export default Contacts;
