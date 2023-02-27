import { clodinaryConfig } from "../config/cloudinaryConfig";
import axios from "axios";
const { cloudinaryName, cloudinaryKey, cloudinaryPreset } = clodinaryConfig;

export const uploadImage = async (imageFile) => {
  const url = `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload/`;
  const formData = new FormData();

  formData.append("api_key", cloudinaryKey);
  formData.append("upload_preset", cloudinaryPreset);
  formData.append("timestamp", Date.now() / 1000 || 0);
  formData.append("file", imageFile);

  const configOfUpload = {
    header: { "Content-Type": "multipart/form-data" },
  };

  const { data } = await axios.post(url, formData, configOfUpload);

  return data;
};
