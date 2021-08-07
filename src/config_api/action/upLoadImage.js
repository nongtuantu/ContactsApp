import storage from "@react-native-firebase/storage";
import { utils } from "@react-native-firebase/app";

export default (file) => (onSuccess) => (onError) => {
  const path = "/contact-pictures/user/pictures/" + file.modificationDate;
  const ref = storage().ref(path);

  const task = ref.putFile(file.path);

  task
    .then(async () => {
      const url = await ref.getDownloadURL();
      onSuccess(url);
    })
    .catch((error) => {
      onError(error);
    });
};
