import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAD2bS3Ynaxd9eWXhrHHbO-eao4-DNIuog",
  authDomain: "basic-crud-7a6b7.firebaseapp.com",
  projectId: "basic-crud-7a6b7",
  storageBucket: "basic-crud-7a6b7.appspot.com",
  messagingSenderId: "320071939630",
  appId: "1:320071939630:web:9a99d9848e690190eb11bf"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const storage = getStorage(app);

/**
 * 
 * @param {File} image Any image
 * @returns The download URL for the image
 */
export const uploadImage = async (image) => {
  const uploadImage = ref(storage, v4());
  await uploadBytes(uploadImage, image);
  const urlImg = await getDownloadURL(uploadImage);

  return urlImg;
}